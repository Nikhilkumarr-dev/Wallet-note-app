import React, { useState } from 'react';
import { uploadToIPFS } from '../utils/ipfs';

const NoteForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [link, setLink] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const url = await uploadToIPFS(`${title}\n${content}`);
    setLink(url);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" />
      <textarea value={content} onChange={e => setContent(e.target.value)} placeholder="Note Content" />
      <button type="submit">Upload Note</button>
      {link && <p>IPFS Link: <a href={link} target="_blank">{link}</a></p>}
    </form>
  );
};

export default NoteForm;
