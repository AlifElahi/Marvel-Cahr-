import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


export default function DenseAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" >
        <Toolbar style={{ display: "flex", justifyContent: "center" }} >
          <Typography variant="h6" color="inherit" justifyContent={"center"} component="div">
            Marvel
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}