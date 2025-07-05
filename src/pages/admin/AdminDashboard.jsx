// frontend/src/pages/admin/AdminDashboard.jsx

import React from "react";
import { Container, Grid, Paper, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Admin Dashboard
      </Typography>

      <Grid container spacing={3}>
        {/* Upload Case */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} sx={{ p: 3, textAlign: "center" }}>
            <Typography variant="h6">Upload New Case</Typography>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 2 }}
              onClick={() => navigate("/admin/upload")}
            >
              Go
            </Button>
          </Paper>
        </Grid>

        {/* Add Rules */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} sx={{ p: 3, textAlign: "center" }}>
            <Typography variant="h6">Add Fraud/Error Rules</Typography>
            <Button
              variant="contained"
              color="secondary"
              fullWidth
              sx={{ mt: 2 }}
              onClick={() => navigate("/admin/rules")}
            >
              Go
            </Button>
          </Paper>
        </Grid>

        {/* View All Cases */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} sx={{ p: 3, textAlign: "center" }}>
            <Typography variant="h6">View Uploaded Cases</Typography>
            <Button
              variant="outlined"
              fullWidth
              sx={{ mt: 2 }}
              onClick={() => navigate("/admin/cases")}
            >
              Go
            </Button>
          </Paper>
        </Grid>

        {/* Flagged Cases */}
        <Grid item xs={12} sm={6} md={6}>
          <Paper elevation={3} sx={{ p: 3, textAlign: "center" }}>
            <Typography variant="h6">Flagged by AI</Typography>
            <Button
              variant="outlined"
              color="error"
              fullWidth
              sx={{ mt: 2 }}
              onClick={() => navigate("/admin/flagged")}
            >
              Go
            </Button>
          </Paper>
        </Grid>

        {/* Feedback Loop */}
        <Grid item xs={12} sm={6} md={6}>
          <Paper elevation={3} sx={{ p: 3, textAlign: "center" }}>
            <Typography variant="h6">Feedback Review</Typography>
            <Button
              variant="contained"
              color="success"
              fullWidth
              sx={{ mt: 2 }}
              onClick={() => navigate("/admin/feedback")}
            >
              Go
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AdminDashboard;
