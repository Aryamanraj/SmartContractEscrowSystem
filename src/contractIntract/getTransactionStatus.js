import { ethers } from "ethers";
import { getContract } from "../utils/utils";

async function getTransactionStatus(transactionId) {
  try {
    const contract = await getContract();
    const transactionIdBytes32 = ethers.utils.formatBytes32String(transactionId);
    const tx = await contract.getTransactionStatus(transactionIdBytes32);
    alert("Transaction Status: "+ tx);
  } catch (error) {
    console.error("Failed:", error);
  }
}
export { getTransactionStatus };
