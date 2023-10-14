import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import TravelExploreIcon from '@mui/icons-material/TravelExplore'
import MenuIcon from '@mui/icons-material/Menu';

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color='inherit'>
        <Toolbar variant="dense">
          <TravelExploreIcon edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </TravelExploreIcon>
          <Typography variant="h6" color="inherit" component="div">
            VENGO
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}