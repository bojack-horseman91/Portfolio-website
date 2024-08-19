import React from 'react';
import { Box, Tabs, Tab, Typography, Toolbar } from '@mui/material';

interface NavBarProps {
  activeTab: number;
  setActiveTab: (value: number) => void;
}

const Navbar: React.FC<NavBarProps> = ({ activeTab, setActiveTab }) => {
  const handleTabChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setActiveTab(newValue);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Box
        component="nav"
        sx={{
          backgroundColor: 'transparent',
          boxShadow: 'none',
          position: 'relative'
        }}
      >
        <Toolbar>
          <Typography fontFamily={'monospace'} variant="h5" component="div" sx={{ flexGrow: 1 }}>
            Saleh Sakib Ahmed
          </Typography>
        </Toolbar>
        <Tabs value={activeTab} onChange={handleTabChange} aria-label="simple tabs example" centered>
          <Tab label="Research and projects" />
          <Tab label="Music" />
          <Tab label="Art" />
          <Tab label="Education and Awards" />
        </Tabs>
      </Box>
    </Box>
  );
};

export default Navbar;
