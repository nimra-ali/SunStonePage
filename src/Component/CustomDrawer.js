// CustomDrawer.js
import React, { useState } from 'react';
import DrawerMui from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import navicon from '../Component/Assets/icon.svg';
import { ListItemIcon } from '@mui/material';
import home from '../Component/Assets/homie.svg';
import api from '../Component/Assets/book.svg';
import calender from '../Component/Assets/calender.svg';
import chats from '../Component/Assets/chats.svg';
import trophy from '../Component/Assets/trophy.svg';
import updateicon from '../Component/Assets/updateicon.svg';

const CustomDrawer = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (index) => {
    setSelectedItem(index);
  };

  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  return (
    <div className='drawer-main' >
     
      <IconButton
        edge="start"
        color="inherit"
        className='icon-drawer'
        aria-label="menu"
        onClick={handleDrawerOpen}
      >
        <MenuIcon />
      </IconButton>
      <DrawerMui
      className='drawer-mobile'
        anchor="left"
        style={{height :"auto"}}
        open={openDrawer}
        onClose={handleDrawerClose}
      >
            <div  className='sunstone-div-drawer'>
        <img className='nav-icon-drawer' src={navicon} alt='navicon' />
        <h1 className='sunstone-paragrah-drawer'>Sunstone</h1>
      </div>
        <List className='listedd' >
        
          <ListItem
            button
            className={selectedItem === 0 ? 'selected' : ''}
            onClick={() => handleItemClick(0)}
          >
            <ListItemIcon>
              <img
                src={home}
                alt='homeicon'
                className={selectedItem === 0 ? 'selected-img' : ''}
              />
            </ListItemIcon>
            <ListItemText className='primary-sidebartext' primary="Home" />
          </ListItem>
          <ListItem
            button
            className={selectedItem === 1 ? 'selected' : ''}
            onClick={() => handleItemClick(1)}
          >
            <ListItemIcon>
              <img
                src={api}
                alt='homeicon'
                className={selectedItem === 1 ? 'selected-img' : ''}
              />
            </ListItemIcon>
            <ListItemText className='primary-sidebartext' primary="API Docs" />
          </ListItem>
          <ListItem
            button
            className={selectedItem === 2 ? 'selected' : ''}
            onClick={() => handleItemClick(2)}
          >
            <ListItemIcon>
              <img
                src={calender}
                alt='homeicon'
                className={selectedItem === 2 ? 'selected-img' : ''}
              />
            </ListItemIcon>
            <ListItemText className='primary-sidebartext' primary="Applications" />
          </ListItem>
          <ListItem
            button
            className={selectedItem === 3 ? 'selected' : ''}
            onClick={() => handleItemClick(3)}
          >
            <ListItemIcon>
              <img
                src={chats}
                alt='homeicon'
                className={selectedItem === 3 ? 'selected-img' : ''}
              />
            </ListItemIcon>
            <ListItemText className='primary-sidebartext' primary="Blogs" />
          </ListItem>
          <ListItem
            button
            className={selectedItem === 4 ? 'selected' : ''}
            onClick={() => handleItemClick(4)}
          >
            <ListItemIcon>
              <img
                src={trophy}
                alt='homeicon'
                className={selectedItem === 4 ? 'selected-img' : ''}
              />
            </ListItemIcon>
            <ListItemText className='primary-sidebartext' primary="Hackathon" />
          </ListItem>
        </List>
        <div className='update-main'>
          <div className='update-box'>
            <img className='update-img' src={updateicon} alt='update-icon' />
            <p className='upgrade-text'>
              Upgrade to Sunstone Pro member
            </p>
            <p className='update-text-two'>
              Get full access to all courses for 1 month.
            </p>
            <button className='update-btn'>
              Upgrade to Pro
            </button>
          </div>
        </div>
      </DrawerMui>
    </div>
  );
}

export default CustomDrawer;
