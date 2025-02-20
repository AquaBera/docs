# Pot2Pump: The Bonding Curve Killer

Welcome to **Pot2Pump**, a fair-liquidity meme launchpad developed by **Honeypot Finance** and **powered exclusively by AquaBera's Automated Liquidity Manager (ALM)**. Pot2Pump is designed to replace legacy bonding-curve models (like Pump.fun) with a sustainable and profitable approach to launching meme coins on Berachain.

---

## Why Pot2Pump?

- **Level Playing Field:** Eliminates predatory trading bots that siphon liquidity from legitimate investors.
- **Low Risk for Participants:** If the launch doesn't meet the funding threshold, investors get a **full refund** of deposited tokens.
- **Enhanced Liquidity Management:** Uses the [**AquaBera ALM**](../AutomatedLiquidityManager/Overview-Benefits/) for concentrated liquidity, reducing risk and maximizing returns.
- **Robust Incentives for LPs:** Early LPs benefit from permanent liquidity locks, yet still earn yields via Berachain's Proof of Liquidity (PoL).

### Core Improvements Over Traditional Bonding Curves

1. **Refund Mechanism:** If a token launch fails to reach its raise goal, investors can claim their tokens back (paying only gas fees).
2. **Advanced Automated Liquidity:** No more static or single-range liquidity provisioning. AquaBera's ALM continuously optimizes the pool.
3. **Reducing Early Dumps:** Locks 40% of LP tokens in InterPol, which can't be withdrawn but **still accrues yields**—increasing scarcity and reducing speculative sell-offs.

---

## Key Features

- **Two-Phase Launch:**  
  1. **Pot Phase**: The pre-DEX fundraising period.  
  2. **Pump Phase**: After hitting the raise threshold, the token is listed on Wasabee DEX with an AquaBera-managed POGE Vault.

- **Directional Liquidity:**  
  By integrating with the ALM, Pot2Pump ensures liquidity is **aligned with market movements**, minimizing over-selling and stabilizing meme coin prices.

- **Permanent Locked Liquidity:**  
  40% of LP tokens get locked in InterPol. This "technical burn" raises price potential without forfeiting yield.

- **Fair Launch Mechanics:**  
  No early trading by bots, no advantage to big buyers—just a straightforward path from raise to DEX listing.

---

## AquaBera ALM Integration

Pot2Pump **exclusively** uses [**AquaBera's Automated Liquidity Manager**](../Automated-Liquidity-Manager/) to:

- **Optimize Concentrated Liquidity**: Keep liquidity in the ideal price range, collecting maximum fees.  
- **Provide Single-Sided Deposits**: Participants can supply only one token, avoiding complex ratio management.  
- **Protect Against Impermanent Loss**: The ALM's inventory-based rebalancing reduces the risk of dumping or excessive accumulation.

For more details about Pot2Pump, visit the [HoneyPot Finance Documentation](https://docs.honeypotfinance.xyz/pot2pump) or try it out on the [HoneyPot Finance Platform](https://honeypotfinance.xyz/).

---

## Documentation Overview

1. **[How It Works](How-It-Works/)**  
   Explore the **Pot Phase** and **Pump Phase** in detail, including how funds are raised, how the POGE Vault is formed, and how refunds/thresholds operate.

2. **[Smart Contracts](Smart-Contracts/)**  
   Review the ABI references for `createPair`, `depositRaisedToken`, `refundRaisedToken`, `claimLP`, and `claimableLP`. Learn how to integrate Pot2Pump in your dApp or scripts.

For further support, please file an issue on [GitHub issues](https://github.com/AquaBera/alm/issues).

---
