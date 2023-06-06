import React, { useState } from "react";
import { addSignature } from "../contractIntract/addSign";
import { getTransactionStatus } from "../contractIntract/getTransactionStatus";
import { resolveDispute } from "../contractIntract/resolveDispute";

const ArbitratorLogin = () => {
  const [showAddSignatureForm, setShowAddSignatureForm] = useState(false);
  const [showStatusForm, setShowStatusForm] = useState(false);
  const [showResolveDisputeForm, setShowResolveDisputeForm] = useState(false);

  const [transactionId, setTransactionId] = useState("");
  const [disputeResolution, setDisputeResolution] = useState(false);

  const handleAddSignature = () => {
    setShowAddSignatureForm(true);
  };

  const handleGetTransactionStatus = () => {
    setShowStatusForm(true);
  };

  const handleResolveDispute = () => {
    setShowResolveDisputeForm(true);
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

    if (action === "Resolve-Dispute") {
      try {
        resolveDispute(transactionId, disputeResolution);
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

      <button onClick={handleResolveDispute}>Resolve Dispute</button>
      {showResolveDisputeForm && (
        <div>
          <input
            type="text"
            placeholder="Transaction ID"
            value={transactionId}
            onChange={(e) => setTransactionId(e.target.value)}
          />
          <div>
            <label>
              <input
                type="radio"
                value={true}
                checked={disputeResolution === true}
                onChange={() => setDisputeResolution(true)}
              />
              Disputor is right
            </label>
            <label>
              <input
                type="radio"
                value={false}
                checked={disputeResolution === false}
                onChange={() => setDisputeResolution(false)}
              />
              Disputor is wrong
            </label>
          </div>
          <button onClick={() => handleSubmit("Resolve-Dispute")}>
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default ArbitratorLogin;
