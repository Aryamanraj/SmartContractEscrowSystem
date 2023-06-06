# Decentralized Escrow System

The Decentralized Escrow System is a smart contract-based application that facilitates secure transactions between buyers, sellers, and arbitrators. It ensures trust and transparency by leveraging blockchain technology.

## Sections

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Smart Contracts](#smart-contracts)
- [Functions](#functions)
- [Contributing](#contributing)
- [License](#license)


## Features

- Create transactions with seller, buyer, and arbitrator details.
- Add digital signatures to verify the authenticity of transaction participants.
- Lock transactions to initiate the dispute resolution process.
- Release locked transactions after dispute resolution or completion.
- Initiate disputes with relevant details for resolution.
- Get the status of a transaction.
- Resolve disputes as an arbitrator with true or false decision.

## Prerequisites

To run the Decentralized Escrow System, make sure you have the following prerequisites installed on your machine:

- Node.js
- React.js
- Ethereum client or provider (e.g., Ganache, MetaMask)

## Installation

1. Clone the repository:

```console
git clone https://github.com/Aryamanraj/SmartContractEscrowSystem.git
```
2. Navigate to the project directory:
```console
cd SmartContractEscrowSystem
```
3. Install the dependencies:
```console
npm install
```
4. Start the development server:
```console
npm start
```

5. Open your web browser and visit http://localhost:3000 to access the application.

## Usage

- **Buyer**: Use the BuyerLogin component to create transactions, add signatures, lock transactions, release transactions, and initiate disputes.
- **Seller**: Use the SellerLogin component to add signatures and get the status of transactions.
- **Arbitrator**: Use the ArbitratorLogin component to add signatures, get the status of transactions, and resolve disputes.

## Smart Contracts

The smart contracts used in this application are included in the `contracts` directory. They are written in Solidity and deployed on the Ethereum blockchain.

- `EscrowContract.sol`: Main contract that handles the escrow functionality, including creating transactions, adding signatures, locking transactions, releasing transactions, initiating disputes, and resolving disputes.

## Functions

### 1. createTransaction

Creates a new transaction in the escrow system.

**Inputs:**
- `transactionId` (string): Unique identifier for the transaction.
- `seller` (address): Ethereum address of the seller.
- `arbitrator` (address): Ethereum address of the arbitrator.
- `amount` (uint256): Amount of funds to be held in escrow for the transaction.

**Usage:**
```javascript
await createTransaction(transactionId, seller, arbitrator, amount);
```

**User Role:**
- `Buyer`


### 2. addSign
Allows the seller to add their signature to the transaction.

**Inputs:**
- `transactionId` (string): Unique identifier of the transaction.

**Usage:**

```javascript
await addSign(transactionId);
```

**User Role:**
- `Buyer`
- `Seller`
- `Arbitrator`


### 3. getTransactionStatus
Retrieves the status of a transaction.

**Inputs:**
- `transactionId` (string): Unique identifier of the transaction.

**Usage:**
```javascript
await getTransactionStatus(transactionId);
```

**User Role:**
- `Buyer`
- `Seller`
- `Arbitrator`


### 4. lockTnx
Locks the transaction for a specified duration.

**Inputs:**
- `transactionId` (string): Unique identifier of the transaction.
- `duration` (uint256): Duration in seconds for which the transaction should be locked.

**Usage:**
```javascript
await lockTnx(transactionId, duration);
```

**User Role:**
- `Buyer`

### 5. releaseTnx
Releases the funds held in escrow for a transaction.

**Inputs:**
- `transactionId` (string): Unique identifier of the transaction.

**Usage:**
```javascript
await releaseTnx(transactionId);
```
**User Role:**
- `Buyer`

### 6. initiateDispute
Initiates a dispute for a transaction.

**Inputs:**
- `transactionId` (string): Unique identifier of the transaction.
- `disputeReason` (string): Reason for initiating the dispute.

**Usage:**
```javascript
await initiateDispute(transactionId, disputeReason);
```
**User Role:**
- `Buyer`

### 7. resolveDispute
Resolves a dispute for a transaction.

**Inputs:**
- `transactionId` (string): Unique identifier of the transaction.
- `resolution` (bool): Resolution of the dispute (true or false).

**Usage:**
```javascript
await resolveDispute(transactionId, resolution);
```

**User Role:**
- `Arbitrator`


## Contributing

Contributions are welcome! If you'd like to contribute to the Decentralized Escrow System, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes and push the branch.
4. Submit a pull request explaining your changes.

## License

The Decentralized Escrow System is open-source software licensed under the [MIT license](LICENSE).

