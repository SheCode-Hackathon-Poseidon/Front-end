import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import TravelExploreIcon from '@mui/icons-material/TravelExplore'
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color='inherit'>
        <Toolbar variant="dense">
          
          <Avatar alt="Remy Sharp" src="../../images/logo.png" />
          <Typography variant="h6" color="inherit" component="div">
            VENGO
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}