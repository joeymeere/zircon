export const generateAKeypairAndAirdrop = {
  name: "Find the Latest Slot",
  description:
    "Make use of the getLatestBlockhash/getSlot RPC methods to find the latest slot. As slots are constantly changing, please round younr answer to the closest 1000 when submitting.",
  difficulty: 1,
  api: "latest_slot",
  solved: false,
  type: null,
  example_answer: "208053152",
  hints: [
    "Look for the 'context' property in the response.",
    "Run the example code and look for the 'slot' property within the aforementioned 'context' property.",
  ],
  info: "This (getLatestBlockhash) is vital in creating transactions!",
  js_code: `
const url = "https://mainnet.helius-rpc.com/?api-key=<api_key>"

const getGenesisHash = async () => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      "jsonrpc":"2.0","id":1, "method":"getGenesisHash"
    }),
  });
  const { result } = await response.json();
  return result
};
getGenesisHash()`,
  py_code: null,
  docs: "https://docs.solana.com/api/http#getlatestblockhash",
  tags: ["RPC"],
};
