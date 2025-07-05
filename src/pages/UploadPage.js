import React, { useState } from 'react';
import {
  Container, Typography, TextField, Button, Paper, Grid,
  InputLabel, MenuItem, Select, FormControl
} from '@mui/material';
import axios from 'axios';

const UploadPage = () => {
  const [caseId, setCaseId] = useState('');
  const [userId, setUserId] = useState('');
  const [metadata, setMetadata] = useState('');
  const [files, setFiles] = useState(null);
  const [status, setStatus] = useState('');

  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append("case_id", caseId);
      formData.append("user_id", userId);
      formData.append("metadata", metadata);
      if (files) {
        for (let i = 0; i < files.length; i++) {
          formData.append("documents", files[i]);
        }
      }

      const response = await axios.post("http://localhost:8000/user/upload_case", formData, {
        headers: { "Content-Type": "multipart/form-data" }
      });

      setStatus(`✅ Upload Successful: ${response.data.mongo_id}`);
    } catch (err) {
      setStatus(`❌ Upload Failed`);
    }
  };

  return (
    <Container maxWidth="md" style={{ marginTop: 40 }}>
      <Paper style={{ padding: 30 }}>
        <Typography variant="h5" gutterBottom>📤 Upload New Case</Typography>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Case ID" value={caseId} onChange={(e) => setCaseId(e.target.value)} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="User ID" value={userId} onChange={(e) => setUserId(e.target.value)} />
          </Grid>

          <Grid item xs={12}>
            <TextField fullWidth multiline rows={4} label="Metadata (JSON or Notes)" value={metadata} onChange={(e) => setMetadata(e.target.value)} />
          </Grid>

          <Grid item xs={12}>
            <Button variant="contained" component="label">
              Select Files
              <input type="file" hidden multiple onChange={(e) => setFiles(e.target.files)} />
            </Button>
            <Typography variant="body2" style={{ marginTop: 8 }}>
              {files ? `${files.length} file(s) selected.` : "No file selected."}
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Button variant="contained" color="primary" fullWidth onClick={handleSubmit}>
              🚀 Upload Case
            </Button>
          </Grid>
        </Grid>

        <Typography variant="body1" style={{ marginTop: 20 }}>
          {status}
        </Typography>
      </Paper>
    </Container>
  );
};

export default UploadPage;