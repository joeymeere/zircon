import { getAssetsByOwner } from "../getAssetsByOwner";


interface AssetList {
  id: string;
  image: string;
  groupId: any;
  meta: any;
  uri: string;
}

export async function check76Credentials(key: string) {
  try {
    let block: { name: string, image: string } | {} | null = {};

    let assets: AssetList[] = await getAssetsByOwner(key);

    const devCard = await assets.find(
      (x: any) => x.groupId.group_value == "Da7ryJm1WRaZagzWVSYvS8dtwQnV1iN3cz76wGH7D6UX"
    );

    if (devCard) {
      let xName = await devCard.meta.attributes.find((x: any) => x.trait_type == "X");

      let jsonUri = devCard.uri;

      const res = await fetch(jsonUri).then((resp) =>
        resp.json()
      );

      block = {
        name: xName.value,
        image: res.properties.files[1].uri
      }
    } else {
      block = null;
        return console.log("No 76 DevCard found.");
    }

    return block;
  } catch (err) {
    throw new Error(`${err}`);
  }
}