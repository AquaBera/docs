# How Pot2Pump Works

Pot2Pump features a **two-phase** process—**Pot Phase** followed by the **Pump Phase**—to ensure fair fundraising, sustainable liquidity, and minimized risk for participants. This approach leverages the [**AquaBera ALM**](../AutomatedLiquidityManager/Overview-Benefits/) to optimize meme token liquidity from launch to DEX listing.

---

## 1. Pot Phase (Pre-DEX)

### 1.1 Raising Initial Funds

- **User Deposits**: Participants can contribute whitelisted tokens (e.g., $WBERA, $HPOT, $HONEY, or $HENLO) to the Pot.  
- **Goal**: Each Pot2Pump launch aims to raise at least **$20,000** in total deposits. If this threshold isn't met, participants can claim a **full refund** (minus gas fees).

### 1.2 Liquidity Pool Creation

- **Project Owner**: Sets up new liquidity pools based on the contributed tokens.  
- **Concentrated Liquidity Setup**: Pot2Pump anticipates eventual migration to Wasabee DEX (Algebra Integral).  
- **Outcomes**:
  - **SUCCESS**: If the raise meets or exceeds $20,000, the token proceeds to the Pump Phase.  
  - **FAILURE**: If not, depositors can call `refundRaisedToken()` to retrieve their tokens.

### 1.3 Refund Assurance

Participants face **minimal financial risk**. If the project fails to reach $20,000:

- **Immediate Refund**: Everyone gets their deposit back by calling the `refundRaisedToken()` method.
- **No Trapped Liquidity**: The system automatically flags the pool as "not successful," preventing partial distribution.

---

## 2. Pump Phase (Dex Launch)

Once the raise threshold is met:

### 2.1 Automated Deployment to DEX

- **Wasabee DEX**: Pot2Pump migrates liquidity to Wasabee, Berachain's Algebra-based AMM, for trading.  
- **POGE Vault Creation**: Honeypot Finance sets up a dedicated vault using [**AquaBera's ALM**](../AutomatedLiquidityManager/README.md) to handle directional liquidity and optimize fee collection.

### 2.2 InterPol Liquidity Lock

- **40% Lock**: The system "technically burns" 40% of LP tokens in InterPol.  
- **Yield Preservation**: Though locked, these tokens **still earn** fees and incentives, benefiting the entire pool.

### 2.3 Claiming Liquidity Positions

- **ERC-721 to ERC-20 Conversion**: Early participants who received an NFT representing their share can now convert it into a fungible position in the POGE Vault.  
- **High APY & BGT Incentives**: Earn from transaction fees, partner rewards, and potential BGT emissions if the meme token is whitelisted in Berachain's Proof of Liquidity (PoL).

**LP Ownership Breakdown** (example):
50% → Early participants (Pot Phase) 40% → Locked in InterPol 5% → Token deployer 5% → Pot2Pump platform

---

## 3. Why Use AquaBera ALM?

During the Pump Phase, Pot2Pump taps into AquaBera's ALM to:

1. **Protect Meme Token Valuation**: Avoid over-selling of deposit assets, vital in volatile meme markets.  
2. **Maximize Trading Fees**: Concentrated liquidity ensures fees are earned in the most active price ranges.  
3. **Lower Impermanent Loss**: Inventory-based rebalancing dynamically adjusts positions, reducing exposure to drastic price moves.

For more on the ALM's concentrated liquidity strategies, see the [**Overview & Benefits**](../AutomatedLiquidityManager/Overview-Benefits/).

---

## 4. Next Steps & Related Topics

1. **Review the [Smart Contracts](../SmartContracts/)**: Learn how `createPair`, `depositRaisedToken`, and other ABIs operate.  
2. **Explore [AquaBera's ALM Documentation](../AutomatedLiquidityManager/README.md)**: Understand how single-sided deposits, rebalancing, and gauge incentives can further boost yields.  
3. **Join the Community**: For support and troubleshooting, please file an issue on [GitHub](https://github.com/AquaBera/alm/issues).

---
