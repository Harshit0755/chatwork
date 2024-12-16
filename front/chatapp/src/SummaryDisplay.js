import React from 'react';

const SummaryDisplay = ({ summary }) => {
  return (
    <div className="summary-display">
      <h3>Summary</h3>
      {summary ? (
        <p>{summary}</p>
      ) : (
        <p>No summary available. Please summarize a document.</p>
      )}
    </div>
  );
};

export default SummaryDisplay;
