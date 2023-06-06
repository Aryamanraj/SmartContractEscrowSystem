import React from "react";
import { ethers } from "ethers";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const address = await signer.getAddress();
      try {
        const signature = await signer.signMessage(address);
        console.log(signature);
        localStorage.setItem("Wallet_address", address);
        navigate('/login-as');
      } catch (error) {
        console.log("Login Rejected");
      }
    } catch (error) {
      console.error("Error connecting to MetaMask:", error);
    }
  };
  return (
    <div>
      <button onClick={handleLogin}>Connect with MetaMask</button>
    </div>
  );
};

export default Login;
