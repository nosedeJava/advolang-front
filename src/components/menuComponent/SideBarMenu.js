import React, {useEffect, useState} from 'react';
import './SideBarMenu.css';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {MenuItemsList} from './MenuItemsList';
import {List, ListItem, ListItemIcon, ListItemText, Box} from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Avatar from '@material-ui/core/Avatar';
import RequestService from "../../services/RequestService";
import LoadImage from "../../services/LoadImage";

export function SideBarMenu (props){

  const [user, setUser] = useState({fullName:'', email:''});

  useEffect(() => {
    RequestService.getUser()
        .then(response => setUser(response))
  },[])

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const handleLogout = () => {
    localStorage.clear();
    props.history.push("/login");
  }

  const list = (anchor) => (
    <div
      className={anchor === 'top' || anchor === 'bottom' ? "upDownMenuDiv":"sideMenuDiv"}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem button key="userInfo">
          <div className="avatarProfileImageBox">
            {user && !user.profileImage ? (
                LoadImage('user.png', 'frontcontainer',100)
            ):(
                LoadImage(user.profileImage, RequestService.getUsername(),100)
            )}
          </div>
          <ListItemText
            className = "userProfileData"
            primary={user.fullName}
            secondary={user.email}
          />
        </ListItem>
      </List>

      <Divider />

      <div className="menuItemsDiv">
        <List>
          <MenuItemsList itemslist={props.menuList} history={props.history} />
        </List>
      </div>

      <Divider />

      <div className="logoutDiv">
        <List>
        <Box className="logoutText" onClick={handleLogout}>
          <ListItemIcon><ExitToAppIcon /> Logout</ListItemIcon>
        </Box>
      </List>
      </div>

    </div>
  );

  const menuSide=props.side;

  return(

    <div>
      <React.Fragment key={menuSide}>
        <IconButton color="inherit" aria-label="open drawer" onClick={toggleDrawer(menuSide, true)} edge="start">
          <MenuIcon />
        </IconButton>

        <SwipeableDrawer
          anchor={menuSide}
          open={state[menuSide]}
          onClose={toggleDrawer(menuSide, false)}
          onOpen={toggleDrawer(menuSide, true)}
        >
          {list(menuSide)}
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );

}
