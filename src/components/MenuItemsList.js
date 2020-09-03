import React from 'react';
import List from '@material-ui/core/List';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import ListItemText from '@material-ui/core/ListItemText';
import {BrowserRouter as Router, Switch, Route, Link, LinkProps} from "react-router-dom";
import PruebaReactIndex from './PruebaReactIndex';
import ListItemLink from './ListItemLink';

export class MenuItemsList extends React.Component{
  constructor(props){
    super(props);

    this.state=({selectedItem:null});
    this.handleClick=this.handleClick.bind(this);
  }


  handleClick = item => {
    this.props.clickHandler(item.name);
  }

  render(){

    var menuItemsList=this.props.itemslist.map((item, i) =>
      <List>

        <ListItemLink href={'#'+item.path} button key={i} onClick={() => this.handleClick(item)}>
          <ListItemText primary={item.name} />
        </ListItemLink>
      </List>
    );

    return(

      <div>
          {menuItemsList}

      </div>

    );
  }
}
