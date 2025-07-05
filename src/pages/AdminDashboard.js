// src/pages/AdminDashboard.js

import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [stats, setStats] = useState({});
  const [recentUploads, setRecentUploads] = useState([]);

  useEffect(() => {
    // Fetch stats and recent uploads (mock for now)
    fetchStats();
    fetchRecentUploads();
  }, []);

  const fetchStats = async () => {
    // Replace this with your actual backend endpoint
    setStats({
      totalCases: 184,
      pending: 17,
      rejected: 5,
      processed: 162,
    });
  };

  const fetchRecentUploads = async () => {
    // Replace this with your actual backend endpoint
    setRecentUploads([
      { case_id: "CSE123", status: "Pending", uploaded_by: "admin", date: "2025-06-25" },
      { case_id: "CSE122", status: "Processed", uploaded_by: "admin", date: "2025-06-24" },
      { case_id: "CSE121", status: "Rejected", uploaded_by: "admin", date: "2025-06-24" },
    ]);
  };

  return (
    <Box p={3}>
      <Typography variant="h4" mb={2}>
        Welcome back, Siddharth! 🎯
      </Typography>

      <Grid container spacing={2} mb={3}>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6">Total Cases</Typography>
              <Typography variant="h4">{stats.totalCases}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6">Pending</Typography>
              <Typography variant="h4">{stats.pending}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6">Rejected</Typography>
              <Typography variant="h4">{stats.rejected}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6">Processed</Typography>
              <Typography variant="h4">{stats.processed}</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Box display="flex" gap={2} mb={3}>
        <Button variant="contained" onClick={() => navigate("/admin/upload")}>
          Upload Case
        </Button>
        <Button variant="outlined" onClick={() => navigate("/admin/view-cases")}>
          View All Cases
        </Button>
        <Button variant="outlined" onClick={() => navigate("/admin/manage-rules")}>
          Manage Rules
        </Button>
      </Box>

      <Typography variant="h6" gutterBottom>
        Recent Uploads
      </Typography>
      <Paper elevation={3}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Case ID</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Uploaded By</TableCell>
              <TableCell>Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {recentUploads.map((upload, index) => (
              <TableRow key={index}>
                <TableCell>{upload.case_id}</TableCell>
                <TableCell>{upload.status}</TableCell>
                <TableCell>{upload.uploaded_by}</TableCell>
                <TableCell>{upload.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Box>
  );
};

export default AdminDashboard;