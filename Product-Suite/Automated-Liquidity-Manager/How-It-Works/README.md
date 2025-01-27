# How the ALM Works

AquaBera's Automated Liquidity Manager (ALM) is powered by **on-chain algorithms** that dynamically adjust your positions to optimize yield and mitigate risk. Below is a closer look at the underlying mechanics, from **single-token deposits** to **inventory-based rebalancing**.

---

## 1. Single-Token Deposits

### 1.1 Why Single-Token Deposits?

Traditional liquidity pools require two assets in a specific ratio (e.g., 50/50). This can lead to extra swap costs and risk if you don't hold both tokens. With AquaBera's ALM, you:

- Deposit just one token (such as your native project token or a stablecoin).
- Receive an ALM "Vault Token" representing your share of the liquidity pool.
- Avoid forced swaps that might dilute your position in a volatile market.

### 1.2 Directional Liquidity

By depositing a single token, you effectively tell the ALM **which asset you prefer to hold** in greater quantity. The ALM's algorithm works to **avoid over-selling** that asset, so you maintain a higher inventory of your preferred token.

---

## 2. Inventory-Based Rebalancing

### 2.1 Core Concept

Instead of reacting to every price movement, the ALM keeps track of your "inventory" ratio (how much of each token you hold in the pool). It only rebalances when the pool's composition deviates from the target ratio. This avoids unnecessary swaps and fees while maintaining optimal liquidity positions.

**Key States**:

- **Healthy**: Liquidity is well-balanced. The ALM collects trading fees without rebalancing.  
- **Over-Inventory**: You have too much of your deposit token. The ALM may carefully sell some to restore balance.  
- **Under-Inventory**: You have too little of your deposit token. The ALM buys more to get back on target.  
- **High Volatility**: The ALM broadens price ranges to mitigate risk when markets swing rapidly.  
- **Extreme Volatility**: The ALM may lock the vault or require manual intervention for safety.

### 2.2 No Swap Costs in Rebalancing

Because the ALM tracks what you deposit, it often repositions liquidity **without swapping**. This is particularly valuable during large market movements, as you avoid extra selling or buying of your core asset unless truly necessary.

---

## 3. On-Chain Autonomy

### 3.1 100% Smart Contract Logic

All rebalancing functions run on-chain, **without** a privileged "controller" or external script. This ensures:

- **Transparency**: Anyone can verify rebalances on the blockchain.
- **Fairness**: No single entity can adjust positions to gain an advantage.
- **Security**: No private keys or custodial risk—your funds remain under your control.

### 3.2 Automated Triggering

Rebalances occur automatically based on **inventory thresholds**, **price triggers**, or **time intervals**, depending on the vault's parameters. You don't need to pay additional gas fees or babysit the vault.

---

## 4. Yield Generation & Rewards

### 4.1 Trading Fees

As traders buy/sell within your liquidity range, you earn trading fees proportional to your share of the pool. The ALM's concentrated positions aim to keep you "in-range" as much as possible, **maximizing your collected fees**.

### 4.2 Gauge Incentives & PoL

If your vault is gauge-enabled, you can earn additional $BGT incentives via Berachain's Proof-of-Liquidity (PoL) system. The ALM ensures your liquidity remains attractive to gauge voters by maintaining healthy, deep liquidity in the pool.

---

## 5. Putting It All Together

1. **Deposit a Single Token**: Commit your chosen asset to an ALM vault.  
2. **ALM Mints a Vault Token**: Representing your share of the liquidity.  
3. **Inventory-Based Positioning**: The ALM sets your liquidity ranges to collect fees and preserve your preferred asset.  
4. **Automated Rebalancing**: When your inventory drifts from targets, the ALM repositions.  
5. **Collect Fees & Incentives**: Enjoy continuous earnings from trading fees and potential PoL gauge rewards.

---

## 6. Next Steps

- **Check out the [Managing Positions FAQ](/product-suite/automated-liquidity-manager/managing-positions-faqs)** to learn how to deposit, withdraw, or troubleshoot ALM vaults.  
- **Return to the [Overview & Benefits](/product-suite/automated-liquidity-manager/alm-overview-benefits)** if you want a high-level recap of why the ALM stands out.  
- **Explore our [Developer Docs](https://docs.aquabera.com/developer)** for integration details or advanced parameters if you're a project or DAO.

For more comprehensive guidance, visit our [main AquaBera documentation](https://docs.aquabera.com).

---
