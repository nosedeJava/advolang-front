import React from 'react';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Box, Card, CardMedia, Typography, Link } from '@material-ui/core';
import ListCategories from './ListCategories'
const useStyles = makeStyles({
    recommendationBox: {
        borderRadius: 10,
        padding: '0.1rem',
        marginTop: '1rem',
        backgroundColor: "#242847"
    },
    generalClass: {
        margin: 10,
        borderRadius: 10,
        padding: '0.1rem',
    },
    generalClass2: {
        borderRadius: "50%",
        height: "3.7rem",
        width: "3.7rem",
        fontSize: 10,
        margin: "auto",
    },
    generalClass3: {
        color: "white",
        fontSize: "1.4rem",
        paddingTop: "0.7rem",
        fontFamily: "Verdana",
    },
    generalClass4: {
        fontSize: "1.2rem",
        fontFamily: "Verdana",
        color: "#B3B8E0",
    },
    generalClass5: {
        fontSize: "1rem",
        fontFamily: "Verdana",
        color: "#B3B8E0",
    },
    thumbnailSpace: {
        maxWidth: "8rem",
        maxHeight: "5rem",
        backgroundColor: "white",
    },
    categoriesStyle: {
        margin: "0.7rem",
        borderRadius: 10,
        padding: '0.1rem',
        backgroundColor: "#B3B8E0",
    }
});
function Recommendation(props) {
    
    const classes = useStyles();
    let history = useHistory();
    let colorScore = props.score>3.8?"#418525" : props.score<2.8? "#C77938": "#C7B117";
    const handleRedirectSpecific=()=>{
        localStorage.setItem("recommendation-id",123)
        history.push("/specific-recommendation")
    }
    return (

        <Grid container>
            <Grid item xs={1} ></Grid>
            <Grid item xs={8} >
                <Box className={classes.recommendationBox} >
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
                                    <Typography className={classes.generalClass4} onClick={()=>handleRedirectSpecific()}>
                                        {props.title}
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid container >
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
                            <Box border={1} className={classes.generalClass2} style={{ backgroundColor: colorScore, }}>
                                <Typography className={classes.generalClass3} align="center" >
                                    {props.score}
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid container  >
                        <Grid item xs={12}>
                            <Box className={classes.categoriesStyle}>
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