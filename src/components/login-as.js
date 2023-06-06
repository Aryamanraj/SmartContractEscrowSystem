import React from "react";
import { ethers } from "ethers";
import { useNavigate } from "react-router-dom";

const Loginas = () => {
  const navigate = useNavigate();
  const handleLogin = (role) => {
    if (role === "buyer") {
      navigate('/buyer-login');
    } else if (role === "seller") {
      navigate('/seller-login');
    } else if (role === "arbitrator") {
      navigate('/arbitrator-login');
    }
  };
  return (
    <div>
      <h1>Login as....?</h1>
      <button onClick={() => handleLogin('buyer')}>Buyer</button>
      <button onClick={() => handleLogin('seller')}>Seller</button>
      <button onClick={() => handleLogin('arbitrator')}>Arbitrator</button>
    </div>
  );
};

export default Loginas;
