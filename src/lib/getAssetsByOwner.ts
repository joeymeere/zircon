export async function getAssetsByOwner(key: string) {
  const url = process.env.NEXT_PUBLIC_HELIUS_ENDPOINT as string;

  let blacklist = [
    "7Nbk8nKHXisM9busRg3aXHWmZ7J2uPTKBWcXieNJt6on",
    "J9Uiah8rj1bnGfqLbAeZ2PXdRNjqap1hEt6t8aFS1ddM",
    "GzXmLd3DgqRyUcGur6NuxYKbK1oRhUWNbmi2nsWGnXpB",
    "F9xmyn14Q5mkNPn36xWXKFs43Kvi4s5uznpmDHYEbA7Q",
    "EFEJdUc4ZywgceqsCZTpcuxVbQ23KKvw9MmqygiHpKPz",
  ];

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      jsonrpc: "2.0",
      id: "my-id",
      method: "getAssetsByOwner",
      params: {
        ownerAddress: key,
        page: 1,
        limit: 1000,
      },
    }),
  });
  const { result } = await response.json();

  let assets = result.items
    .filter((asset: any) => {
      if (asset.grouping) {
        return !asset.grouping.some((group: any) => blacklist.includes(group.group_value));
      }

      return true;
    })
    .map((asset: any) => {
      let nftId = asset.id;
      let nftImage = asset.content.links.image;
      return { 
        id: String(nftId), 
        image: String(nftImage), 
        groupId: asset.grouping.length > 0 ? asset.grouping[0] : "",
        meta: asset.content.metadata,
        uri: asset.content.json_uri ? asset.content.json_uri : "",
      };
    });

  return assets;
}