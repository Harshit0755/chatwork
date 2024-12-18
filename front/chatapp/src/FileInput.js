import React, { useState } from 'react';
import { Box, Typography, Button, useTheme, Paper, CircularProgress, Alert, IconButton } from '@mui/material';
import { CloudUpload as CloudUploadIcon, InsertDriveFile as FileIcon } from '@mui/icons-material';
import pdfToText from 'react-pdftotext';
import './Shimmereffect.css';

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
    setFile(selectedFile);
  };

  function extractText(event) {
    const file = event.target.files[0];
    // pdfToText(file)
    //     .then(text => console.log(text))
    //     .catch(error => console.error("Text extraction failed", error));
}

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
      const fileContent = await processFile(file);
      pdfToText(file)
        .then(text => setSummary(text))
        .catch(error => console.error("Text extraction failed", error));
      /* setSummary(fileContent); */
      await processFile(file);
      pdfToText(file)
        .then((text) => setSummary(text))
        .catch((error) => console.error('Text extraction failed', error));
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

  // Reset the state to upload a new file
  const handleNewFileUpload = () => {
    setFile(null);
    setSummary('');
    setError(null); // Reset error state
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column', // Stack the content vertically
        maxHeight: '100vh',
        backgroundColor: '#e3f2fd', // Lighter blue background for the page
        overflowY: 'auto', // Allow scrolling
        padding: 2,
      }}
    >
      {/* File Input Area - Only show when not loading */}
      {!loading && !summary && (
        <Paper
          sx={{
            padding: 8,
            marginTop:'45px',
            width: '80%',
            maxWidth: 600,
            border: '2px dashed #1976d2', // Keep blue dashed border for the input card
            borderRadius: 2,
            textAlign: 'center',
            transition: 'border-color 0.3s ease',
            cursor: 'pointer',
            boxShadow: 3, // Add shadow for material effect
            backgroundColor: 'white', // White background for the input card
          }}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
        >
          <CloudUploadIcon
            sx={{
              fontSize: 50,
              color: '#1976d2', // Blue color for the icon
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
            <input type="file" hidden onChange={handleFileChange} />
          </Button>

          {file && (
            <Box sx={{ marginTop: 2 }}>
              <Typography variant="body1" color="textSecondary">
                File: {file.name}
              </Typography>
            </Box>
          )}
        </Paper>
      )}

      {/* Summarize Button - Only show when file is selected and not loading */}
      {!loading && !summary && file && (
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
            disabled={!file} // Disable the button until a file is selected
          >
            {loading ? (
              <CircularProgress size={24} sx={{ color: 'white' }} />
            ) : (
              'Summarize'
            )}
          </Button>
        </Box>
      )}

      {/* Error Message */}
      {error && (
        <Box sx={{ marginTop: 2 }}>
          <Alert severity="error">{error}</Alert>
        </Box>
      )}

      {/* Loading State (GIF and Text) */}
      {loading && (
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
          }}
        >
          {/* You can replace with your own GIF */}
          <CircularProgress size={50} sx={{ marginBottom: 2 }} />
          <Typography variant="body1" color="textPrimary">
            Extracting text from PDF...
          </Typography>
          <h1 className='shimmer'>Shimmer Text...</h1>
        </Box>
      )}

      {/* File and Summary Display after processing */}
      {!loading && summary && (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '80%',
            marginTop: 4,
            padding: 2,
          }}
        >
          {/* File Icon and Name Display */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              borderRadius: 2,
              padding: 3,
              boxShadow: 3, // Add shadow for material effect
              backgroundColor: 'white', // White background for the file card
              width: '30%',
              textAlign: 'center',
              border: '2px solid #1976d2', // Blue border for the file card
              transition: 'box-shadow 0.3s ease-in-out',
              '&:hover': {
                boxShadow: 6, // Add hover effect for more elevation
              },
            }}
          >
            <FileIcon sx={{ fontSize: 60, color: '#1976d2' }} />
            <Typography variant="body2" color="textSecondary" sx={{ marginTop: 2 }}>
              {file.name}
            </Typography>

            {/* New File Upload Button */}
            <Box sx={{ marginTop: 2 }}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleNewFileUpload}
                sx={{
                  padding: '8px 20px',
                  fontSize: '16px',
                  textTransform: 'none',
                }}
              >
                Upload a New File
              </Button>
            </Box>
          </Box>

          {/* Summary Box */}
          <Box
            sx={{
              width: '65%',
              padding: 3,
              backgroundColor: 'white',
              borderRadius: 2,
              border: '2px solid #ff679b', // Light gray border for the summary box
              boxSizing: 'border-box',
              maxHeight: '60vh', // Limit height to 60% of the viewport height
              overflowY: 'auto', // Allow scrolling when content overflows
              boxShadow: 3, // Add shadow for material effect
              transition: 'box-shadow 0.3s ease-in-out',
              '&:hover': {
                boxShadow: 6, // Hover effect for more shadow on summary box
              },
              // Custom scrollbar styles
              '&::-webkit-scrollbar': {
                width: '10px',
              },
              '&::-webkit-scrollbar-thumb': {
                backgroundColor: '#ff679b',
                borderRadius: '10px',
              },
              '&::-webkit-scrollbar-track': {
                backgroundColor: '#f1f1f1',
                borderRadius: '10px',
              },
            }}
          >
            <Typography variant="h6" color="textPrimary" gutterBottom>
              File Summary:
            </Typography>
            <Typography variant="body1" color="textSecondary">
              {summary}
            </Typography>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default FileInput;
