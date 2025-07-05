// src/pages/UploadCase.jsx

import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  CircularProgress,
} from "@mui/material";
import axios from "axios";

const UploadCase = () => {
  const [caseId, setCaseId] = useState("");
  const [userId, setUserId] = useState("");
  const [metadata, setMetadata] = useState("");
  const [context, setContext] = useState("");
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const handleUpload = async () => {
    setLoading(true);
    const formData = new FormData();
    formData.append("case_id", caseId);
    formData.append("user_id", userId);
    formData.append("metadata", metadata); // JSON string
    formData.append("context", context);

    for (let file of files) {
      formData.append("documents", file);
    }

    try {
      const res = await axios.post(
        "http://localhost:8000/admin/upload-case",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      setResponse(res.data);
    } catch (err) {
      setResponse({ error: "Upload failed", details: err.message });
    }
    setLoading(false);
  };

  return (
    <Paper elevation={3} sx={{ p: 4, maxWidth: 600, margin: "auto", mt: 4 }}>
      <Typography variant="h5" mb={2}>
        Upload New Case
      </Typography>

      <TextField
        fullWidth
        label="Case ID"
        value={caseId}
        onChange={(e) => setCaseId(e.target.value)}
        margin="normal"
      />
      <TextField
        fullWidth
        label="User ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        margin="normal"
      />
      <TextField
        fullWidth
        label="Metadata (JSON)"
        value={metadata}
        onChange={(e) => setMetadata(e.target.value)}
        margin="normal"
        multiline
        rows={3}
        placeholder='{"field1": "value1", "field2": "value2"}'
      />
      <TextField
        fullWidth
        label="Context/Description"
        value={context}
        onChange={(e) => setContext(e.target.value)}
        margin="normal"
        multiline
        rows={2}
      />
      <input
        type="file"
        multiple
        onChange={(e) => setFiles(Array.from(e.target.files))}
        style={{ marginTop: 16 }}
      />

      <Box mt={2}>
        <Button variant="contained" onClick={handleUpload} disabled={loading}>
          {loading ? <CircularProgress size={24} /> : "Upload Case"}
        </Button>
      </Box>

      {response && (
        <Box mt={3}>
          <Typography
            variant="body1"
            color={response.error ? "error" : "primary"}
          >
            {response.error
              ? response.error
              : `Upload successful! Mongo ID: ${response.mongo_id}`}
          </Typography>
        </Box>
      )}
    </Paper>
  );
};

export default UploadCase;
