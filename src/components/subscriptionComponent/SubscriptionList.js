import React from 'react';
import './SubscriptionList.css';
import { useHistory } from "react-router-dom";
import {Box, List, ListItem, ListItemText, Divider} from '@material-ui/core';
import {redirectToRecomPageRoute} from '../Auxiliar/Redirect';

export function SubscriptionList(props) {

  let history = useHistory();

  const handleRecomPageRedirect = (sub) => {
    redirectToRecomPageRoute(sub, history)
  }

  const size =  props.subscriptions.length;
  const subsList = props.subscriptions.map((sub, i) =>

      <ListItem button key={i} onClick={() => handleRecomPageRedirect(sub)}>
        <Box className="listSubsItem">
          <ListItemText primary={"#"+sub} className="listSubsItemText"/>
          {
            i !== size-1 && <Divider />
          }
        </Box>
    	</ListItem>
  );

  return (

    <Box className="SubsListContainer">
      <List className="generalSubscriptionsList">
        <Box className="subsListSubheader">
          {"My subscriptions"}
        </Box>
        <Divider />
        <List className="listItemsContainerBox">
          {subsList}
        </List>

      </List>
    </Box>

  );
}
