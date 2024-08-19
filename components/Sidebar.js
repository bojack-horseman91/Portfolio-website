import React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

const Sidebar = () => {
  return (
    <Box sx={{ width: 250, bgcolor: 'background.paper' }}>
      <nav aria-label="main mailbox folders">
        <List>
          <ListItem button>
            <ListItemText primary="Item 1" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Item 2" />
          </ListItem>
        </List>
      </nav>
      <Divider />
      <nav aria-label="secondary mailbox folders">
        <List>
          <ListItem button>
            <ListItemText primary="Item 3" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Item 4" />
          </ListItem>
        </List>
      </nav>
    </Box>
  );
};

export default Sidebar;
