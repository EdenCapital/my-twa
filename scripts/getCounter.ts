import { getHttpEndpoint } from "@orbs-network/ton-access";
import { TonClient, Address } from "@ton/ton";
import Counter from "../wrappers/Counter";

export async function run() {
  const endpoint = await getHttpEndpoint({ network: "testnet" });
  const client = new TonClient({ endpoint });

  const counterAddress = Address.parse("EQC3MFIEeohV9MeYMTxVHeS1rVQVpg8LyJ9zxJQOm294f26s"); // 替换为你的合约地址
  const counter = new Counter(counterAddress);
  const counterContract = client.open(counter);

  const counterValue = await counterContract.getCounter();
  console.log("value:", counterValue.toString());
}
