import React, { useState } from 'react';

const TextAreaInput = ({ onTextChange }) => {
  return (
    <div className="text-area-section">
      <h3>Paste Your Text</h3>
      <textarea
        placeholder="Paste your document text here..."
        onChange={(e) => onTextChange(e.target.value)}
      ></textarea>
    </div>
  );
};

export default TextAreaInput;
