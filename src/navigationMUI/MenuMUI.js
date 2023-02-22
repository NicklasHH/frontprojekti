import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import NotificationsPausedIcon from '@mui/icons-material/NotificationsPaused';
import Button from '@mui/material/Button';

function MenuMUI() {

  const [anchorFood, setOpenFood] = useState(null);
  const [anchorSleep, setOpenSleep] = useState(null);

  function foodOpen(event) {
    if (anchorFood !== event.currentTarget) {
      setOpenFood(event.currentTarget);
    }
  }

  function sleepOpen(event) {
    if (anchorSleep !== event.currentTarget) {
      setOpenSleep(event.currentTarget);
    }
  }

  function foodClose() {
    setOpenFood(null);
  }
  function sleepClose() {
    setOpenSleep(null);
  }  


  return (
    <Box sx={{backgroundColor: '#45484e',color: '#FAD22B' }}>
      <Toolbar>
      <Box flexGrow={0.05} />

      <Button
        onClick={foodOpen}
        onMouseOver={foodOpen}
        variant="outlined" color='inherit'
      >
        <LunchDiningIcon />Ruoka
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorFood}
        open={Boolean(anchorFood)}
        onClose={foodClose}
        MenuListProps={{onMouseLeave: foodClose}}
      >
        <MenuItem onClick={foodClose}>Ruokalista</MenuItem>
        <MenuItem onClick={foodClose}>Lisää Ruoka</MenuItem>
      </Menu>

      <Box flexGrow={0.05} />
      
      <Button
        onClick={sleepOpen}
        onMouseOver={sleepOpen}
        variant="outlined" color='inherit'
      >
        <NotificationsPausedIcon />Uni
      </Button>
      <Menu
      
        id="simple-menu"
        anchorEl={anchorSleep}
        open={Boolean(anchorSleep)}
        onClose={sleepClose}
        MenuListProps={{ onMouseLeave: sleepClose }}
      >
        <MenuItem onClick={sleepClose}>Unilista</MenuItem>
        <MenuItem onClick={sleepClose}>Lisää uni</MenuItem>
      </Menu>

      </Toolbar>
    </Box>
  );
}

export default MenuMUI;
//sx={{backgroundColor: '#FAD22B'}}
