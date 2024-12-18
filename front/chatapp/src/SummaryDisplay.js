import React from 'react';
import { Box, Typography } from '@mui/material';

const SummaryDisplay = ({ summary }) => {
  return (
    <Box
      sx={{
        marginTop: 3,
        padding: 2,
        maxHeight: '60vh', // Limit height to 60% of the viewport height
        overflowY: 'auto', // Allow scrolling when content overflows
        backgroundColor: '#f4f4f4',
        borderRadius: 2, // Rounded edges
        border: '1px solid #ddd',
        boxSizing: 'border-box', // Ensures padding is included in the height calculation
      }}
    >
      <Typography variant="h6" color="textPrimary" gutterBottom>
        Summary
      </Typography>
      {summary ? (
        <Typography variant="body1" color="textSecondary">
          {summary}
        </Typography>
      ) : (
        <Typography variant="body1" color="textSecondary">
          No summary available. Please summarize a document.
        </Typography>
      )}
    </Box>
  );
};

export default SummaryDisplay;
