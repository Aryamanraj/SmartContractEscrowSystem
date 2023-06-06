import { ethers } from "ethers";
import { getContract } from "../utils/utils";

async function initiateDispute(transactionId, disputeReasonIPFS) {
  try {
    const contract = await getContract();
    const transactionIdBytes32 = ethers.utils.formatBytes32String(transactionId);
    const tx = await contract.initiateDispute(transactionIdBytes32, disputeReasonIPFS);
    await tx.wait();
    alert("Dispute Raised");
  } catch (error) {
    console.error("Failed:", error);
  }
}
export { initiateDispute };
