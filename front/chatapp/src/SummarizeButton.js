import React from 'react';

const SummarizeButton = ({ onSummarize, isProcessing }) => {
  return (
    <button onClick={onSummarize} disabled={isProcessing}>
      {isProcessing ? 'Summarizing...' : 'Summarize Document'}
    </button>
  );
};

export default SummarizeButton;
