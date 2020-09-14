import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import ListItemText from '@material-ui/core/ListItemText';
import auth from '../../services/authService.js';

export function MenuItemsList(props){

  function handleMenuItemListTo(path){
    if(auth.isAuthenticated()){
      props.history.push(path);
    };
  }


    var menuItemsList=props.itemslist.map((item, i) =>
      <List>
        <ListItem button key={i} onClick={() => handleMenuItemListTo(item.path)}>
          <ListItemIcon>{i % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
          <ListItemText primary={item.name} />
        </ListItem>
      </List>
    );

    return(

      <div>
          {menuItemsList}

      </div>

    );
}
