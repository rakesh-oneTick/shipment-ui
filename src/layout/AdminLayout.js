// 📄 src/layout/AdminLayout.js

// import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminSidebar from '../components/AdminSideBar';
import { Box, Drawer, Toolbar } from '@mui/material';

const drawerWidth = 240;

const AdminLayout = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
      >
        <Toolbar />
        <AdminSidebar />
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Outlet /> {/* <-- This renders the nested route */}
      </Box>
    </Box>
  );
};

export default AdminLayout;
