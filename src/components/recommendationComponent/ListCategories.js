import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Chip from '@material-ui/core/Chip';
import './ListCategories.css'

const useStyles = makeStyles({

    chipStyle: {
        color: "#B3B8E0",
        backgroundColor:"#242847",
    },

});
function ListCategories(props) {
    const classes= useStyles();
    let catList = JSON.parse(JSON.stringify(props.content));
    return (
        <Grid container spacing={1} className="listCategoriesContainer">
            {catList.map((category, i) => (
              <Grid item key={category.value+"-"+i}>
                <Chip  label={category.value}  component="a" href={"#"+category.value} clickable color="primary" className={classes.chipStyle}/>
              </Grid>
            ))}
        </Grid>
    );
}

export default ListCategories;
