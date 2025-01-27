# Managing Positions FAQ

This FAQ addresses common questions about **depositing**, **withdrawing**, and **monitoring** liquidity positions using AquaBera’s Automated Liquidity Manager (ALM). Whether you’re new to DeFi or a seasoned liquidity provider, the answers below will help you optimize your ALM experience.

---

## 1. Deposits & Withdrawals

### **Q1: How do I deposit my tokens into the ALM?**

1. Navigate to the AquaBera dashboard and select your preferred **ALM Vault**.  
2. Approve the token you’d like to deposit (e.g., a stablecoin or your project’s native asset).  
3. Enter the amount you wish to deposit.  
4. Confirm the transaction in your connected wallet.  

> **Tip:** The ALM works best with single-token deposits, so no need to worry about pairing assets.

### **Q2: Can I withdraw my deposit at any time?**

Yes. Withdrawals are **non-custodial**, and you can redeem your portion of the liquidity at any moment. The platform will burn your ALM Vault Tokens and return your underlying assets, including accrued fees.

### **Q3: What if I don’t see my token in the ALM vault selection?**

The token and corresponding pool must be integrated on your AMM (e.g., Kodiak) and recognized by AquaBera. If a pool doesn’t exist or lacks an ALM vault, **contact us** or follow the instructions for creating a new vault.

---

## 2. Monitoring & Rebalancing

### **Q4: Do I need to manually rebalance my position?**

No. The ALM automatically rebalances based on **inventory levels** and **vault parameters**. There’s no additional gas fee for you, and no special triggers you must manage.

### **Q5: How often does the ALM rebalance?**

Rebalancing occurs whenever your vault’s “inventory” or price thresholds are exceeded. The frequency depends on market volatility, the vault’s settings, and overall trading activity.

### **Q6: How can I track performance and fees earned?**

Use the AquaBera dashboard to view:

- **Current Vault Balance**: See your share of each token.  
- **Accrued Fees**: Monitor fees accumulated over time.  
- **Historical Rebalances**: Review a log of recent rebalancing events.

---

## 3. Fees, Rewards & Risk Management

### **Q7: What fees am I charged for using the ALM?**

The ALM charges a small protocol fee on earned trading fees or gauge incentives (exact rates vary by vault). Check the vault details for specifics.

### **Q8: How do I earn additional rewards from gauges?**

If the vault is gauge-enabled within **Berachain’s PoL**, you can earn $BGT rewards. You don’t have to do anything extra; simply deposit into the gauge-enabled vault. The ALM manages the rest.

### **Q9: Can the ALM protect me from impermanent loss?**

It **reduces** the likelihood of severe impermanent loss by aligning liquidity with your deposit token preference and avoiding unnecessary swaps. However, no solution can **fully** eliminate impermanent loss in DeFi if price ratios move significantly.

---

## 4. Vault Administration & Governance

### **Q10: I’m a project admin—how do I request a custom vault?**

1. Ensure your token pair is recognized on the AMM (Kodiak or another supported AMM).  
2. Contact AquaBera to initiate a **new vault request**.  
3. Provide necessary details (token addresses, vault parameters, etc.).  
4. Wait for on-chain deployment and gauge approval (if desired).

### **Q11: Who controls the vault parameters?**

Each vault’s configuration (inventory thresholds, fee structure, etc.) is set on-chain. Vault parameters can typically only be changed via **governance** or designated admin roles, ensuring transparency and security.

---

## 5. Troubleshooting

### **Q12: My transaction failed when depositing or withdrawing. What should I do?**

- **Check Gas Limits**: Ensure you have enough native tokens (e.g., BERA) for gas.  
- **Review Token Approval**: Make sure you’ve approved the correct token contract.  
- **Confirm Vault Availability**: If the vault is at capacity or locked due to extreme volatility, your transaction may fail.

### **Q13: Why is my vault “locked” during extreme volatility?**

In certain **extreme market conditions**, the ALM’s final safety net may lock new deposits or rebalances. This prevents catastrophic impermanent loss until the market stabilizes. You can typically withdraw existing funds, but deposits may be paused temporarily.

---

## Still Have Questions?

If you can’t find an answer here, try:

- Our [Developer Docs](#) for technical integration details.  
- The [AquaBera Community Resources](#) to get real-time assistance.  
- [Submit a support ticket on GitHub](#) or ask in our official forum.

---
