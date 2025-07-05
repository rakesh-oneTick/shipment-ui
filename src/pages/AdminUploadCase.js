// 📄 File: src/pages/AdminUploadCase.js

import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Paper, Grid } from '@mui/material';
import axios from 'axios';

const AdminUploadCase = () => {
  const [caseId, setCaseId] = useState('');
  const [userId, setUserId] = useState('');
  const [metadata, setMetadata] = useState({});
  const [context, setContext] = useState('');
  const [files, setFiles] = useState([]);

  const handleMetadataChange = (e) => {
    const { name, value } = e.target;
    setMetadata({ ...metadata, [name]: value });
  };

  const handleFileChange = (e) => {
    setFiles(Array.from(e.target.files));
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('case_id', caseId);
    formData.append('user_id', userId);
    formData.append('context', context);
    formData.append('metadata', JSON.stringify(metadata));
    files.forEach((file) => formData.append('documents', file));

    try {
      const res = await axios.post('http://localhost:8000/admin/upload-case', formData);
      alert('Case uploaded successfully!');
    } catch (err) {
      console.error(err);
      alert('Upload failed!');
    }
  };

  return (
    <Container maxWidth="md">
      <Paper sx={{ padding: 4, marginTop: 4 }}>
        <Typography variant="h5" gutterBottom>Upload a New Case</Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField fullWidth label="Case ID" value={caseId} onChange={(e) => setCaseId(e.target.value)} />
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth label="User ID" value={userId} onChange={(e) => setUserId(e.target.value)} />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="Context / Notes" value={context} onChange={(e) => setContext(e.target.value)} multiline rows={3} />
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth label="Field 1" name="field1" onChange={handleMetadataChange} />
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth label="Field 2" name="field2" onChange={handleMetadataChange} />
          </Grid>
          <Grid item xs={12}>
            <input type="file" multiple onChange={handleFileChange} />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" onClick={handleSubmit}>Upload Case</Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default AdminUploadCase;