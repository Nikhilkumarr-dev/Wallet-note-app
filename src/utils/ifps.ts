import { Web3Storage } from 'web3.storage';
const token = import.meta.env.VITE_WEB3_STORAGE_TOKEN;
const client = new Web3Storage({ token });

export async function uploadToIPFS(content: string): Promise<string> {
  const blob = new Blob([content], { type: 'text/plain' });
  const file = new File([blob], 'note.txt');
  const cid = await client.put([file]);
  return `https://${cid}.ipfs.dweb.link/note.txt`;
}