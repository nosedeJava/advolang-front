import React from 'react';
import './Panel.css';
import {Toolbar, Box} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import {SideBarMenu} from './SideBarMenu';


export function Panel (props){

    return (
      <div className="panelDiv">
          <Toolbar className="toolbarPanel" style={{
              height: '8vh',
              minHeight: '10vh'
          }}>
              <SideBarMenu side="left" menuList={props.menuList} history={props.history} />
              <Box>
                  Advolang
              </Box>
          </Toolbar>
      </div>
    );
}
