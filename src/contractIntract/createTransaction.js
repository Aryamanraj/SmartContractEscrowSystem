import { ethers } from "ethers";
import { getContract } from "../utils/utils";

async function createTransaction(
  transactionId,
  sellerAddress,
  arbitratorAddress,
  amount
) {
  console.log(amount);
  try {
    const contract = await getContract();
    const transactionIdBytes32 =
      ethers.utils.formatBytes32String(transactionId);
    const tx = await contract.createTransaction(
      transactionIdBytes32,
      sellerAddress,
      arbitratorAddress,
      { value: ethers.utils.parseEther(amount) }
    );
    await tx.wait();
    console.log("Transaction created");
  } catch (error) {
    console.error("Failed:", error);
  }
}

export { createTransaction };
