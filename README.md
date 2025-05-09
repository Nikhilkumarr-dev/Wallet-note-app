# Solana Wallet-Linked Notes App

A beginner-friendly decentralized notes app that allows users to connect their Solana wallet and save notes to IPFS via Web3.Storage.

---

## Features

- Connect your Solana wallet (e.g., Phantom)
- Create and edit simple text notes
- Upload notes to IPFS using Web3.Storage
- View your uploaded notes through IPFS links

<pre><code>## 🧱 Project Structure 
 solana-notes-app/ 
├── public/ 
  ├── src/ │ 
    ├── components/ │ │
     ├── WalletConnect.tsx │ │ 
     └── Notes.tsx │ 
    ├── utils/ │ 
      │ └── uploadToIPFS.ts │ 
  ├── App.tsx 
  │ └── main.tsx 
├── .env 
├── package.json 
└── README.md 
</code></pre>

## 🚀 Getting Started

Follow these steps to clone and run the project locally.

### 1. Clone the repository

```bash
git clone https://github.com/your-username/solana-notes-app.git
cd solana-notes-app

npm install

VITE_WEB3_STORAGE_TOKEN=your_web3_storage_token_here

npm run dev

