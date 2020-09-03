import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Box, Card, CardMedia, Typography } from '@material-ui/core';
import ListCategories from './ListCategories'
const useStyles = makeStyles({
    generalClass: {
        margin: 10,
        borderRadius: 10,
        padding: '0.5rem',
    },
    generalClass2: {
        backgroundColor: "green",
        borderRadius: "50%",
        height: "3.7rem",
        width: "3.7rem",
        fontSize: 10,
    },
    generalClass3: {
        color: "white",
        fontSize: "1.4rem",
        paddingTop: "0.7rem",
        fontFamily: "Verdana",
    },
    generalClass4: {
        fontSize: "1.5rem",
        fontFamily: "Verdana",
    },
    generalClass5: {
        fontSize: "1rem",
        fontFamily: "Verdana",
    },
    thumbnailSpace: {
        maxWidth: "10rem",
        maxHeight: "5rem",
    },
});
function Recommendation(props) {
    const classes = useStyles();
    return (
        <Grid container>
            <Grid item xs={9} >
                <Box border={1} className={classes.generalClass} >
                    <Grid container >
                        <Grid item xs={2} className={classes.generalClass}>
                            <Card className={classes.thumbnailSpace}>
                                <CardMedia
                                    component="img"
                                    image={props.sourceImage}
                                />
                            </Card>
                        </Grid>
                        <Grid item xs={8} className={classes.generalClass}>
                            <Grid item xs={12} >
                                <Box textAlign="left">
                                    <Typography className={classes.generalClass4}>
                                        {props.title}
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid container xs={12} >
                                <Grid item xs={4}>
                                    <Box textAlign="left">
                                        <Typography className={classes.generalClass5}>
                                            {props.user}
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={4}>
                                    <Box textAlign="left">
                                        <Typography className={classes.generalClass5}>
                                            {props.level}
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={4}>
                                    <Box textAlign="right">
                                        <Typography className={classes.generalClass5}>
                                            {props.time}
                                        </Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={1} className={classes.generalClass}>
                            <Box border={1} className={classes.generalClass2}>
                                <Typography className={classes.generalClass3} >
                                    {props.score}
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid container xs={12} >
                        <Grid item xs={12}>
                            <Box border={1} className={classes.generalClass}>
                                <ListCategories content={props.categories} />
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
        </Grid>
    );
}

export default Recommendation;