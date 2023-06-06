import React, { useState } from "react";
import { createTransaction } from "../contractIntract/createTransaction";
import { addSignature } from "../contractIntract/addSign";
import { lockTransaction } from "../contractIntract/lockTnx";
import { releaseTransaction } from "../contractIntract/releaseTnx";
import { initiateDispute } from "../contractIntract/initiateDispute";
import { getTransactionStatus } from "../contractIntract/getTransactionStatus";

const BuyerLogin = () => {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [showAddSignatureForm, setShowAddSignatureForm] = useState(false);
  const [showLockForm, setShowLockForm] = useState(false);
  const [showReleaseForm, setShowReleaseForm] = useState(false);
  const [showDisputeForm, setShowDisputeForm] = useState(false);
  const [showStatusForm, setShowStatusForm] = useState(false);

  const [transactionId, setTransactionId] = useState("");
  const [disputeReason, setDisputeReason] = useState("");
  const [disputeDuration, setDisputeDuration] = useState("");

  const [sellerAddress, setSellerAddress] = useState("");
  const [arbitratorAddress, setArbitratorAddress] = useState("");
  const [amount, setAmount] = useState("");

  const handleCreateTransaction = () => {
    setShowCreateForm(true);
  };

  const handleAddSignature = () => {
    setShowAddSignatureForm(true);
  };

  const handleLockTransaction = () => {
    setShowLockForm(true);
  };

  const handleReleaseTransaction = () => {
    setShowReleaseForm(true);
  };

  const handleInitiateDispute = () => {
    setShowDisputeForm(true);
  };

  const handleGetTransactionStatus = () => {
    setShowStatusForm(true);
  };

  const handleSubmit = async (action) => {
    if (action === "create-Transaction") {
      try {
        createTransaction(
          transactionId,
          sellerAddress,
          arbitratorAddress,
          amount
        );
      } catch (error) {
        console.error(error); // Handle error if any
      }
    }

    if (action === "Add-Signature") {
      try {
        addSignature(transactionId);
      } catch (error) {
        console.error(error); // Handle error if any
      }
    }

    if (action === "Lock-Transaction") {
      try {
        lockTransaction(transactionId, disputeDuration);
      } catch (error) {
        console.error(error); // Handle error if any
      }
    }

    if (action === "Release-Transaction") {
      try {
        releaseTransaction(transactionId);
      } catch (error) {
        console.error(error); // Handle error if any
      }
    }

    if (action === "Initiate-Dispute") {
      try {
        initiateDispute(transactionId, disputeReason);
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
      <button onClick={handleCreateTransaction}>Create Transaction</button>
      {showCreateForm && (
        <div>
          <input
            type="text"
            placeholder="Transaction ID"
            value={transactionId}
            onChange={(e) => setTransactionId(e.target.value)}
          />
          <input
            type="text"
            placeholder="Seller Address"
            value={sellerAddress}
            onChange={(e) => setSellerAddress(e.target.value)}
          />
          <input
            type="text"
            placeholder="Arbitrator Address"
            value={arbitratorAddress}
            onChange={(e) => setArbitratorAddress(e.target.value)}
          />
          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          {/* ...other input fields specific to createTransaction */}
          <button onClick={() => handleSubmit("create-Transaction")}>
            Submit
          </button>
        </div>
      )}

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

      <button onClick={handleLockTransaction}>Lock Transaction</button>
      {showLockForm && (
        <div>
          <input
            type="text"
            placeholder="Transaction ID"
            value={transactionId}
            onChange={(e) => setTransactionId(e.target.value)}
          />
          <input
            type="text"
            placeholder="Dispute Duration"
            value={disputeDuration}
            onChange={(e) => setDisputeDuration(e.target.value)}
          />

          <button onClick={() => handleSubmit("Lock-Transaction")}>
            Submit
          </button>
        </div>
      )}

      <button onClick={handleReleaseTransaction}>Release Transaction</button>
      {showReleaseForm && (
        <div>
          <input
            type="text"
            placeholder="Transaction ID"
            value={transactionId}
            onChange={(e) => setTransactionId(e.target.value)}
          />
          <button onClick={() => handleSubmit("Release-Transaction")}>
            Submit
          </button>
        </div>
      )}

      <button onClick={handleInitiateDispute}>Initiate Dispute</button>
      {showDisputeForm && (
        <div>
          <input
            type="text"
            placeholder="Transaction ID"
            value={transactionId}
            onChange={(e) => setTransactionId(e.target.value)}
          />
          <input
            type="text"
            placeholder="Dispute reason link (IPFS)"
            value={disputeReason}
            onChange={(e) => setDisputeReason(e.target.value)}
          />
          <button onClick={() => handleSubmit("Initiate-Dispute")}>
            Submit
          </button>
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

export default BuyerLogin;
