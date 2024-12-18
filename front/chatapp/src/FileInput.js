import React, { useState } from 'react';
import { Box, Typography, Button, useTheme, Paper, CircularProgress, Alert } from '@mui/material';
import { CloudUpload as CloudUploadIcon } from '@mui/icons-material';
import pdfToText from 'react-pdftotext'

const FileInput = () => {
  const [dragOver, setDragOver] = useState(false);
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [summary, setSummary] = useState('');
  const [error, setError] = useState(null);

  const theme = useTheme();

  // Handle drag over event
  const handleDragOver = (event) => {
    event.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = () => {
    setDragOver(false);
  };

  // Handle file drop event
  const handleDrop = (event) => {
    event.preventDefault();
    setDragOver(false);
    const droppedFile = event.dataTransfer.files[0];
    setFile(droppedFile);
  };

  // Handle file selection through input
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    console.log("h2");
    setFile(selectedFile);
  };

  // Handle Summarize Button click
  const handleSummarize = async () => {
    if (!file) {
      setError('Please upload a file first!');
      return;
    }

    setLoading(true);
    setError(null); // Reset error message
    setSummary(''); // Reset previous summary

    try {
      // Simulating a file processing or summarization API call
      await processFile(file);
      pdfToText(file)
        .then(text => setSummary(text))
        .catch(error => console.error("Text extraction failed", error));
    } catch (err) {
      setError('Error processing the file.');
    } finally {
      setLoading(false);
    }
  };

  // Simulate file processing (e.g., summarization)
  const processFile = (file) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (file) {
          resolve(`Summary of ${file.name}: This is a placeholder summary text.`);
        } else {
          reject('File processing failed.');
        }
      }, 2000); // Simulating a delay (2 seconds)
    });
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column', // Stack the content vertically
        minHeight: '70vh',
        backgroundColor: theme.palette.background.default,
      }}
    >
      {/* File Input Area */}
      <Paper
        sx={{
          padding: 4,
          width: '80%',
          maxWidth: 600,
          border: '2px dashed',
          borderColor: dragOver ? theme.palette.secondary.main : theme.palette.primary.main,
          borderRadius: 2,
          textAlign: 'center',
          transition: 'border-color 0.3s ease',
          cursor: 'pointer',
        }}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        <CloudUploadIcon
          sx={{
            fontSize: 50,
            color: theme.palette.primary.main,
            marginBottom: 2,
          }}
        />
        <Typography variant="h6" color="textPrimary" gutterBottom>
          Drag & Drop your file here, or click to select one
        </Typography>
        <Button
          variant="contained"
          color="primary"
          component="label"
          sx={{
            padding: '8px 20px',
            fontSize: '16px',
            textTransform: 'none',
          }}
        >
          Select File
          <input
            type="file"
            hidden
            onChange={handleFileChange}
          />
        </Button>

        {file && (
          <Box sx={{ marginTop: 2 }}>
            <Typography variant="body1" color="textSecondary">
              File: {file.name}
            </Typography>
          </Box>
        )}
      </Paper>

      {/* Summarize Button */}
      <Box sx={{ marginTop: 3 }}>
        <Button
          variant="contained"
          color="secondary"
          sx={{
            padding: '12px 30px',
            fontSize: '16px',
            textTransform: 'none',
            '&:hover': {
              backgroundColor: theme.palette.secondary.dark,
            },
          }}
          onClick={handleSummarize}
          disabled={!file || loading} // Disable the button until a file is selected
        >
          {loading ? (
            <CircularProgress size={24} sx={{ color: 'white' }} />
          ) : (
            'Summarize'
          )}
        </Button>
      </Box>

      {/* Error Message */}
      {error && (
        <Box sx={{ marginTop: 2 }}>
          <Alert severity="error">{error}</Alert>
        </Box>
      )}

      {/* Summary */}
      {summary && (
        <Box
          sx={{
            marginTop: 3,
            padding: 3,
            maxWidth: '80%',
            backgroundColor: '#f4f4f4',
            borderRadius: 2,
            border: '1px solid #ddd',
            boxSizing: 'border-box',
            maxHeight: '60vh',  // Limit height to 60% of the viewport height
            overflowY: 'auto',  // Allow scrolling when content overflows
          }}
        >
          <Typography variant="h6" color="textPrimary" gutterBottom>
            File Summary:
          </Typography>
          <Typography variant="body1" color="textSecondary">
            {summary}
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default FileInput;
