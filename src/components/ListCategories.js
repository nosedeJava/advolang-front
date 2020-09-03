import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Box, Typography } from '@material-ui/core';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles({
    boxStyle: {
        borderRadius: 5,
    },
    chipStyle: {
    },

});
function ListCategories(props) {
    const classes = useStyles();
    return (
        <Grid container spacing={1}>
            {props.content.map((category) => (
                <Grid item>
                    <Chip label={category} component="a" href={"#"+category} clickable color="primary"/>

                </Grid>
            ))}
        </Grid>
    );
}

export default ListCategories;