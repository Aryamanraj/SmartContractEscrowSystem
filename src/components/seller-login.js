import React, { useState } from "react";
import { addSignature } from "../contractIntract/addSign";
import { getTransactionStatus } from "../contractIntract/getTransactionStatus";

const SellerLogin = () => {
  const [showAddSignatureForm, setShowAddSignatureForm] = useState(false);
  const [showStatusForm, setShowStatusForm] = useState(false);

  const [transactionId, setTransactionId] = useState("");

  const handleAddSignature = () => {
    setShowAddSignatureForm(true);
  };

  const handleGetTransactionStatus = () => {
    setShowStatusForm(true);
  };

  const handleSubmit = async (action) => {
    if (action === "Add-Signature") {
      try {
        addSignature(transactionId);
      } catch (error) {
        console.error(error); // Handle error if any
      }
    }

    if (action === "Get-Transaction-Status") {
      try {
        getTransactionStatus(transactionId);
      } catch (error) {
        console.error(error); // Handle error if any
      }
    }
  };

  return (
    <div>
      <h1>Action....?</h1>
      <button onClick={handleAddSignature}>Add Signature</button>
      {showAddSignatureForm && (
        <div>
          <input
            type="text"
            placeholder="Transaction ID"
            value={transactionId}
            onChange={(e) => setTransactionId(e.target.value)}
          />
          {/* ...other input fields specific to createTransaction */}
          <button onClick={() => handleSubmit("Add-Signature")}>Submit</button>
        </div>
      )}

      <button onClick={handleGetTransactionStatus}>
        Get Transaction Status
      </button>
      {showStatusForm && (
        <div>
          <input
            type="text"
            placeholder="Transaction ID"
            value={transactionId}
            onChange={(e) => setTransactionId(e.target.value)}
          />
          <button onClick={() => handleSubmit("Get-Transaction-Status")}>
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default SellerLogin;
