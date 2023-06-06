import { ethers } from "ethers";
import { getContract } from "../utils/utils";

async function addSignature(transactionId) {
  try {
    const contract = await getContract();
    const transactionIdBytes32 =
      ethers.utils.formatBytes32String(transactionId);
    const tx = await contract.addSignature(transactionIdBytes32);
    await tx.wait();
    alert("Signature added!");
  } catch (error) {
    console.error("Failed:", error);
  }
}

export { addSignature };
