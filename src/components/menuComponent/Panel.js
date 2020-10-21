import React from 'react';
import './Panel.css';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {SideBarMenu} from './SideBarMenu';


export function Panel (props){

    return (
        <div className="panelDiv">
            <Toolbar>
                <SideBarMenu side="left" menuList={props.menuList} history={props.history} />
                <Typography variant="h6" noWrap>
                    Advolang
                </Typography>
            </Toolbar>
        </div>
    );
}
