import React from 'react';
import './Panel.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {SideBarMenu} from './SideBarMenu';


export class Panel extends React.Component{

  constructor(props){
    super(props);

    this.handleSelectedItem=this.handleSelectedItem.bind(this);
  }


  handleSelectedItem(item) {
    this.props.handleMenuSelection(item);
  }

  render(){

    return (
      <div>
        <CssBaseline />
        <AppBar>
         <Toolbar>
           <SideBarMenu side="left" menuList={this.props.menuList} handleMenuSelection={this.handleSelectedItem}/>
           <Typography variant="h6" noWrap>
             Persistent drawer
           </Typography>
         </Toolbar>
       </AppBar>
      </div>
    );
  }
}
