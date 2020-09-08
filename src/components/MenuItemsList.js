import React from 'react';
import List from '@material-ui/core/List';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import ListItemText from '@material-ui/core/ListItemText';
import {BrowserRouter as Router, Switch, Route, Link, LinkProps, useHistory, useRouteMatch, NavLink} from "react-router-dom";
import PruebaReactIndex from './PruebaReactIndex';
import ListItemLink from './ListItemLink';
import auth from './authentication/auth.js';
import PruebaReactIndex2 from './PruebaReactIndex2'

export function MenuItemsList(props){

    const history = useHistory();
    let {url} = useRouteMatch();
    let match = useRouteMatch();


  function handleMenuItemListTo(path){
    auth.login(() => {
      window.location.replace("/pruebaReactIndex2");
    });
    //props.history.push("/pruebaReactIndex2");
  }


    var menuItemsList=props.itemslist.map((item, i) =>
      <List>
        <ListItem button key={i} onClick={() => handleMenuItemListTo(item.path)}>
          <ListItemIcon>{i % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
          <Link to="/pruebaReactIndex2">Components</Link>
        </ListItem>
      </List>
    );

    return(

      <div>
          {menuItemsList}

      </div>

    );
}
