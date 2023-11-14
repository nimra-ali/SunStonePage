import React from 'react'
import navicon from '../Component/Assets/icon.svg'
import '../Component/Assets/Style/Navbar.css'
import { Dropdown } from '@mui/base/Dropdown';
import { Menu } from '@mui/base/Menu';
import { MenuButton as BaseMenuButton } from '@mui/base/MenuButton';
import { MenuItem as BaseMenuItem, menuItemClasses } from '@mui/base/MenuItem';
import { styled } from '@mui/system';
import point from '../Component/Assets/Ranking.svg';
import userimg from '../Component/Assets/User.svg'
import CustomDrawer from './CustomDrawer';

// import Sidebar from './Sidebar';
const Navbar = () => {

  const createHandleMenuClick = (menuItem) => {
    return () => {
      console.log(`Clicked on ${menuItem}`);
    };
  };
  const Line = styled('div')`
  height: 24px; /* Adjust the height as needed */
  width: 2px;
  background-color: #E0E3E8; /* Adjust the color as needed */
  margin: 5px 8px; /* Adjust the margin as needed */
`;


  return (
    <div className='navbar'>
       <div className='sunstone-div'>
        <img className='nav-icon' src={navicon} alt='navicon'/>
        <h1 className='sunstone-paragrah'>Sunstone</h1>
       </div>
       <div className='drawer'>
    <CustomDrawer/>
    </div>
       <div className='dropdown-div'>
       <Dropdown className='dropdownnn' >
      <MenuButton><img className='star-icon' src={point} alt='point-icon'/> <Line className='line-style' /> <img className='user-style' src={userimg} alt='usersimg'/></MenuButton>
      <Menu className='menu-list' slots={{ listbox: Listbox }}>
        <MenuItem className='menu-profile' onClick={createHandleMenuClick('Profile')}><img className='user-style-2' src={userimg} alt='usersimg'/> <div>
          <p className='alex'>Alexander Gerrard</p>
          <p className='alex-email'>alexander@email.com</p>
          </div>
          </MenuItem>
          <p className='border-bottom'></p>
        <MenuItem onClick={createHandleMenuClick('Language settings')}>
         Profile
        </MenuItem>
        <MenuItem onClick={createHandleMenuClick('Language settings')}>
         Settings
        </MenuItem>
        <p className='border-bottom-2'></p>
        <MenuItem onClick={createHandleMenuClick('Log out')}>Sign out</MenuItem>
      </Menu>
    </Dropdown>
   
  
       </div>
       
    </div>
  
  )
}

export default Navbar

const blue = {
  50: '#F0F7FF',
  100: '#C2E0FF',
  200: '#99CCF3',
  300: '#66B2FF',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E6',
  700: '#0059B3',
  800: '#004C99',
  900: '#003A75',
};

const grey = {
  50: '#F3F6F9',
  100: '#E5EAF2',
  200: '#DAE2ED',
  300: '#C7D0DD',
  400: '#B0B8C4',
  500: '#9DA8B7',
  600: '#6B7A90',
  700: '#434D5B',
  800: '#303740',
  900: '#1C2025',
};

const Listbox = styled('ul')(
  ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  padding: 6px;
  margin: 4px 16px;
  min-width: 200px;
  border-radius: 12px;
  overflow: auto;
  outline: 0px;
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  box-shadow: 0px 4px 30px ${theme.palette.mode === 'dark' ? grey[900] : grey[200]};
  z-index: 1;
  `,
);

const MenuItem = styled(BaseMenuItem)(
  ({ theme }) => `
  list-style: none;
  padding: 8px;
  border-radius: 8px;
  cursor: default;
  user-select: none;

  &:last-of-type {
    border-bottom: none;
  }

  &.${menuItemClasses.focusVisible} {
    outline: 3px solid ${theme.palette.mode === 'dark' ? blue[600] : blue[200]};
    background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]};
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  }

  &.${menuItemClasses.disabled} {
    color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
  }

  &:hover:not(.${menuItemClasses.disabled}) {
    background-color: ${theme.palette.mode === 'dark' ? blue[900] : blue[50]};
    color: ${theme.palette.mode === 'dark' ? blue[100] : blue[900]};
  }
  `,
);

const MenuButton = styled(BaseMenuButton)(
  ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.5;
  padding: 5px 18px;
  border-radius: 8px;
  color: white;
 
  transition: all 150ms ease;
  cursor: pointer;
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  color: ${theme.palette.mode === 'dark' ? grey[200] : grey[900]};
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  display:flex;
  justify-content: space-between;
 

  &:hover {
    background: ${theme.palette.mode === 'dark' ? grey[800] : grey[50]};
    border-color: ${theme.palette.mode === 'dark' ? grey[600] : grey[300]};
  }

  &:active {
    background: ${theme.palette.mode === 'dark' ? grey[700] : grey[100]};
  }

  &:focus-visible {
    box-shadow: 0 0 0 4px ${theme.palette.mode === 'dark' ? blue[300] : blue[200]};
    outline: none;
  }
  `,
  
  );