import { ethers } from "ethers";
import { getContract } from "../utils/utils";

async function releaseTransaction(transactionId) {
  try {
    const contract = await getContract();
    const transactionIdBytes32 = ethers.utils.formatBytes32String(transactionId);
    const tx = await contract.releaseTransaction(transactionIdBytes32);
    await tx.wait();
    alert("Transaction Released");
  } catch (error) {
    console.error("Failed:", error);
  }
}
export { releaseTransaction };
