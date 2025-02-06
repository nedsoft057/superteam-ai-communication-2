import React, { useState } from 'react';
import axios from 'axios';

export default function AdminPanel() {
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('file', file);
    await axios.post('http://localhost:8000/upload-document', formData);
  };

  return (
    <div className="p-4">
      <h1>Superteam Admin</h1>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleUpload} className="bg-blue-500 text-white p-2">
        Upload Document
      </button>
    </div>
  );
}
