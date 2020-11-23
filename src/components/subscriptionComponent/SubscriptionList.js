import React from 'react';
import './SubscriptionList.css';
import {Box, List, ListItem, ListItemText, Divider} from '@material-ui/core';

export function SubscriptionList(props) {

  const size =  props.subscriptions.length;
  const subsList = props.subscriptions.map((sub, i) =>

      <ListItem button key={i} onClick="" >
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
