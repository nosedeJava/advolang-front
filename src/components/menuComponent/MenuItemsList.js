import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import auth from '../../services/authService.js';

export function MenuItemsList(props){

  function handleMenuItemListTo(path){
  	if(auth.isAuthenticated()){
  	  props.history.push(path);
  	}
  }

  let filterShowItems = props.itemslist.filter(item => item.menuVisible === true);
	let menuItemsList = filterShowItems.map((item, i) =>
    <List key={i}>
      <ListItem button key={i} onClick={() => handleMenuItemListTo(item.path)}>
    	   <ListItemIcon>{<item.menuIcon />}</ListItemIcon>
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
