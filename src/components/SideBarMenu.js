import React from 'react';
import './SideBarMenu.css';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {MenuItemsList} from './MenuItemsList';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import PruebaReactIndex from './PruebaReactIndex'


export class SideBarMenu extends React.Component{

  constructor(props){
    super(props);

    const toggleDrawer = (anchor, open) => (event) => {
      if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }

      this.setState({[anchor]: open, actual_item:null})
    };

    this.state={top: false, left: false, bottom: false, right: false};
    this.handleToggleDrawer=toggleDrawer;
    this.handleSelectedItem=this.handleSelectedItem.bind(this);

  }

  handleSelectedItem(item) {
    this.props.handleMenuSelection(item);
  }

  render(){

    const useStyles = makeStyles({
      list: {
        width: 250,
      },
      fullList: {
        width: 'auto',
      },
    });


    const list = (anchor) => (
     <div

       className={clsx(useStyles.list, {
         [useStyles.fullList]: anchor === 'top' || anchor === 'bottom',
       })}
       role="presentation"
       onClick={this.handleToggleDrawer(anchor, false)}
       onKeyDown={this.handleToggleDrawer(anchor, false)}
     >
      <MenuItemsList itemslist={this.props.menuList} clickHandler={this.handleSelectedItem}/>

       <Divider />


     </div>
   );

   const menuSide=this.props.side;
    return(
      <div>
        <React.Fragment key={menuSide}>
          <IconButton color="inherit" aria-label="open drawer" onClick={this.handleToggleDrawer(menuSide, true)} edge="start">
            <MenuIcon />
          </IconButton>
          <SwipeableDrawer
            anchor={menuSide}
            open={this.state.[menuSide]}
            onClose={this.handleToggleDrawer(menuSide, false)}
            onOpen={this.handleToggleDrawer(menuSide, true)}
          >
            {list(menuSide)}
          </SwipeableDrawer>
        </React.Fragment>

        <div>
          {this.state.actual_item}
        </div>

    </div>

    );
  }

}
