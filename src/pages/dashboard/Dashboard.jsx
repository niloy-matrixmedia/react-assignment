import './dashboard.css'
import { IMAGES } from '../../constants'
import { useAuth } from '../../context/AuthContext';
import PersonIcon from '@mui/icons-material/Person';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { styled, useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';


const drawerWidth = 240;
const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));
const Dashboard = () => {
  const { logout } = useAuth();
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


  const history = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open2 = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const toggleDropdown = () => {
    setDropdownOpen(prevState => !prevState);
  };
  const handleLogout = () => {
    logout();
  };
  return (
    <div>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/">
            <img src={IMAGES.Socimo} alt="Socimo" width="30" height="30" />
          </a>
          <a className="dash" href="#">𝕊𝕠𝕔𝕚𝕞𝕠</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div>
            <form className="d-flex">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            </form>
          </div>
          {/* <div className="person">
              <PersonIcon style={{ color: 'rgb(8,141,205)' }} />
          </div> */}
          <div className="person">
            <div onClick={toggleDropdown}>
              <PersonIcon style={{ color: 'rgb(8,141,205)' }} />
            </div>

            {isDropdownOpen && (
              <div className="dropdown-content">
                <ul>
                  <span><a href="/view">View Profile</a></span><br />
                  <span><a href="/update-profile">Edit Profile</a></span>
                </ul>
              </div>
            )}
          </div>
          <div className="logout-container">
            <button className="custom-button" onClick={handleLogout}>
              <a className="button" href="/">logout</a>
            </button>
          </div>

        </nav>
      </div>
      <h1>This is Dashboard page</h1>
      <header>
        <nav>

          <Box sx={{ display: 'flex' }}>
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{ mr: 2, ...(open && { display: 'none' }) }}
              >
                <MenuIcon />
              </IconButton>
            </Toolbar>

            <Drawer
              sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                  width: drawerWidth,
                  boxSizing: 'border-box',
                },
              }}
              variant="persistent"
              anchor="left"
              open={open}
            >
              <DrawerHeader>
                <IconButton onClick={handleDrawerClose}>
                  {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </IconButton>
              </DrawerHeader>
              <Divider />
              <List>
                {[''].map((text, index) => (
                  <ListItem key={text} disablePadding>
                    <ListItemButton>
                      <NavLink to='/addData'> <button className="btn btn-secondary">Add Data</button></NavLink>
                      {/* <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon> */}
                      <ListItemText primary={text} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
              <Divider />
              <List>
                {[''].map((text, index) => (
                  <ListItem key={text} disablePadding>
                    <ListItemButton>
                      <NavLink to='/view-dashboard'> <button className="btn btn-secondary">view Data</button></NavLink>
                      {/* <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon> */}
                      <ListItemText primary={text} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
              <Divider />
            </Drawer>

          </Box>
        </nav>
      </header>

    </div>
  )
}

export default Dashboard