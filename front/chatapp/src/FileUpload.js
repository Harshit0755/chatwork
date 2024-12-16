import React, { useState } from 'react';

const FileUpload = ({ onFileChange }) => {
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      onFileChange(file);
    }
  };

  return (
    <div className="upload-section">
      <h3>Upload Your Document</h3>
      <input type="file" accept=".pdf,.docx,.txt" onChange={handleFileUpload} />
    </div>
  );
};

export default FileUpload;
