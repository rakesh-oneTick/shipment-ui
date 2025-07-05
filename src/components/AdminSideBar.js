// 📄 src/components/AdminSidebar.js (or wherever your sidebar is)

{/* <ListItem button component={Link} to="/admin/upload">
  <ListItemIcon><UploadFileIcon /></ListItemIcon>
  <ListItemText primary="Upload Case" />
</ListItem> */}


// import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import { Link } from 'react-router-dom';

const AdminSidebar = () => {
  return (
    <List>
      <ListItem button component={Link} to="/admin/upload">
        <ListItemIcon><UploadFileIcon /></ListItemIcon>
        <ListItemText primary="Upload Case" />
      </ListItem>
    </List>
  );
};

export default AdminSidebar;


// import UploadFileIcon from '@mui/icons-material/UploadFile'; // Material UI icon
// import { Link } from 'react-router-dom';

// // Inside your menu list:
// <ListItem button component={Link} to="/admin/upload-case">
//   <ListItemIcon><UploadFileIcon /></ListItemIcon>
//   <ListItemText primary="Upload Case" />
// </ListItem>
