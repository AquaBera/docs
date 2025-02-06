# Pot2Pump Smart Contracts

This page provides reference documentation for Pot2Pump's core contracts and ABIs. Developers can use these methods to integrate with the **Pot2Pump** launch process, from creating pairs to depositing and claiming liquidity.

---

## 1. Pot2PumpFactory Module

### 1.1 `createPair` Method

**Purpose**: Deploys a new token pair in the Pot2Pump system.

```json
{
  "inputs": [{
    "components": [{
      "internalType": "address",
      "name": "raisedToken",
      "type": "address"
    }, {
      "internalType": "string",
      "name": "name",
      "type": "string"
    }, {
      "internalType": "string", 
      "name": "symbol",
      "type": "string"
    }, {
      "internalType": "address",
      "name": "swapHandler",
      "type": "address"
    }],
    "internalType": "struct Pot2PumpFactory.CreatePairParams",
    "name": "params",
    "type": "tuple"
  }],
  "name": "createPair",
  "outputs": [{
    "internalType": "address",
    "name": "pair",
    "type": "address"
  }, {
    "internalType": "address",
    "name": "launchedToken",
    "type": "address"
  }],
  "stateMutability": "nonpayable",
  "type": "function"
}
```

**Parameters:**

- `raisedToken`: Address of the token to be raised
- `name`: Token name
- `symbol`: Token symbol
- `swapHandler`: Address of the swap handler contract

**Returns:**

- `pair`: Address of the newly created trading pair
- `launchedToken`: Address of the launched token

**Usage Example (Web3.js):**

```javascript
const createPairParams = {
  raisedToken: "0x...", // Fundraising token
  name: "MyToken",
  symbol: "MTK",
  swapHandler: "0x..."
};

const result = await pot2PumpFactory.methods.createPair(createPairParams).send({ from: userAddress });
console.log(result.events.PairCreated.returnValues);
```

## 2. Deposit & Refund Methods

```json
[{
  "inputs": [{
    "internalType": "address",
    "name": "depositor",
    "type": "address"
  }, {
    "internalType": "uint256",
    "name": "amount",
    "type": "uint256"
  }],
  "name": "depositRaisedToken",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [],
  "name": "refundRaisedToken",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}]
```

### 2.1 `depositRaisedToken`

**Parameters:**

- `depositor`: Address depositing funds
- `amount`: Deposit amount in wei

**Behavior:**

- Validates pair status is not paused
- Checks time constraints (must be before the raise ends)
- If total deposits reach the minimum cap, triggers `_perform()` to finalize the raise

**Usage Example (Web3.js):**

```javascript
await pot2PumpPair.methods.depositRaisedToken(
  userAddress,
  "1000000000000000000"  // 1 token in wei
).send({ from: userAddress });
```

### 2.2 `refundRaisedToken`

**Behavior:**

- Only possible if the fundraising period ended without meeting the minimum cap, or if the pair is paused
- Returns deposited tokens to the user
- Maintains records for early depositors

**Usage Example (Web3.js):**

```javascript
await pot2PumpPair.methods.refundRaisedToken().send({ from: userAddress });
```

## 3. LP Token Management

```json
[{
  "inputs": [{
    "internalType": "address",
    "name": "claimer",
    "type": "address"
  }],
  "name": "claimLP",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "address",
    "name": "claimer",
    "type": "address"
  }],
  "name": "claimableLP",
  "outputs": [{
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
  }],
  "stateMutability": "view",
  "type": "function"
}]
```

### 3.1 `claimableLP`

**Parameters:**

- `claimer`: Address to query for claimable LP tokens

**Returns:**

- The `uint256` amount of unclaimed LP tokens for that address

### 3.2 `claimLP`

**Parameters:**

- `claimer`: Address initiating the claim

**Behavior:**

- Pair status must be "Success"
- Transfers the claimer's LP tokens from the contract to their wallet
- Uses nonReentrant for added security

**Usage Example:**

```javascript
const claimableAmount = await pot2PumpPair.methods.claimableLP(userAddress).call();
console.log(`Claimable LP: ${claimableAmount}`);

if (claimableAmount > 0) {
  await pot2PumpPair.methods.claimLP(userAddress).send({ from: userAddress });
}
```

## 4. Additional Resources

- [How Pot2Pump Works](../How-It-Works/)
  Detailed explanation of Pot and Pump Phases, threshold mechanics, and the POGE vault flow.

- [AquaBera ALM Overview & Benefits](../../Automated-Liquidity-Manager/Overview-Benefits/)
  Learn how AquaBera's ALM powers Pot2Pump, managing directional liquidity and maximizing meme coin profitability.

**Community Support:**

- [AquaBera Community Resources](https://discord.gg/aquabera)
- [GitHub issues](https://github.com/AquaBera/alm/issues)
