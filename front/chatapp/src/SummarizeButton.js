import React from 'react';
import { Button, CircularProgress } from '@mui/material';

const SummarizeButton = ({ onSummarize, isProcessing }) => {
  return (
    <Button
      variant="contained"
      color="secondary"
      onClick={onSummarize}
      disabled={isProcessing}
      sx={{
        padding: '12px 30px',
        fontSize: '16px',
        textTransform: 'none',
        '&:hover': {
          backgroundColor: '#FF4081', // Darker shade for hover effect
        },
      }}
    >
      {isProcessing ? (
        <CircularProgress size={24} sx={{ color: 'white', marginRight: 1 }} />
      ) : (
        'Summarize Document'
      )}
    </Button>
  );
};

export default SummarizeButton;
