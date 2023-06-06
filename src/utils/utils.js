import { ethers } from "ethers";
import EscrowContract from '../smartContract/builds/compiledContract.json'
 // Replace with the path to your contract's JSON file
const contractAddress = "0x1E8a34F9eb6318EEEEFf23Cea1aA63182D67b7c9"
async function getContract() {
  try {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const accounts = await provider.send("eth_requestAccounts", []);
    //const balance = await provider.getBalance(accounts[0]);
    const signer = await provider.getSigner();
    const Contract = new ethers.Contract(contractAddress, EscrowContract.abi, signer);
    return Contract;
  } catch (error) {
    console.error('Error getting Contract:', error);
  }
}
export { getContract };