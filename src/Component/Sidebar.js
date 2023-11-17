// Sidebar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { ListItemIcon } from '@mui/material';
import ListItemText from '@mui/material/ListItemText';
import '../Component/Assets/Style/Sidebar.css';
import api from '../Component/Assets/book.svg';
import calender from '../Component/Assets/calender.svg';
import chats from '../Component/Assets/chats.svg';
import trophy from '../Component/Assets/trophy.svg';
import updateicon from '../Component/Assets/updateicon.svg'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

const Sidebar = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (index) => {
    setSelectedItem(index);
  };

  return (
    <div variant="permanent" anchor="left" className='color'>
      <List className='side'>
        <ListItem
          button
          className={selectedItem === 0 ? 'selected' : ''}
          onClick={() => handleItemClick(0)}
        >
          <ListItemIcon>
            <HomeOutlinedIcon
              style={{ filter: selectedItem === 0 ? 'invert(0%) sepia(92%) saturate(1211%) hue-rotate(258deg) brightness(91%) contrast(100%)' : 'none' }}
            />
          </ListItemIcon>
          <Link to="/" style={{
            textDecoration: 'none'
          }}>
            <ListItemText className='primary-sidebartext' primary="Home" />
          </Link>
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
          <Link to="/api" style={{
            textDecoration: 'none'
          }}>
            <ListItemText className='primary-sidebartext' style={{
              textDecoration:'none'
            }} primary="API Docs" />
          </Link>
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
          <Link to="/applications" style={{
            textDecoration: 'none'
          }}>
            <ListItemText className='primary-sidebartext' primary="Applications" />
          </Link>
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
          <Link to="/blogs" style={{
            textDecoration: 'none'
          }}>
            <ListItemText className='primary-sidebartext' primary="Blogs" />
          </Link>
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
          <Link to="/hackathon" style={{
            textDecoration: 'none'
          }}>
            <ListItemText className='primary-sidebartext' primary="Hackathon" />
          </Link>
        </ListItem>
      </List>
      <div className='update-main'>

        <div className='mobile-view-update'>


          <div className='update-box'>
            <img className='update-img' src={updateicon} alt='update-icon' />
            <p className='upgrade-text'>
              Upgrade to Sunstone Pro member
            </p>
            <p className='update-text-two'>
              Get full access to all course for 1 month.
            </p>
            <button className='update-btn'>
              Upgrade to Pro
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
