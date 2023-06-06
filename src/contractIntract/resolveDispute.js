import { ethers } from "ethers";
import { getContract } from "../utils/utils";

async function resolveDispute(transactionId, isBuyerWinner) {
  try {
    const contract = await getContract();
    const transactionIdBytes32 = ethers.utils.formatBytes32String(transactionId);
    const tx = await contract.resolveDispute(transactionIdBytes32, isBuyerWinner);
    await tx.wait();
    const resolution = (isBuyerWinner===true?"Buyer is right and transaction is reverted":"Seller is right and transaction is completed");
    alert(resolution);
  } catch (error) {
    console.error("Failed:", error);
  }
}
export { resolveDispute };
