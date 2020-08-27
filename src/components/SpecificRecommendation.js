import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Box, Card, CardMedia, Typography } from '@material-ui/core';

const useStyles = makeStyles({
    boxClass: {
        margin: "0.7rem",
        padding: '0.5rem',
    },
    thumbnailSpace: {
        maxWidth: "7rem",
        maxHeight: "4rem",
    },
    fontFamilyTitle: {
        fontSize: "1.4rem",
        fontFamily: "Verdana",
    },
    fontFamilyText: {
        fontSize: "1rem",
        fontFamily: "Verdana",
    },
    score: {
        backgroundColor: "green",
        height: "2rem",
        width: "2rem",
    },
    scoreFont: {
        fontSize: "0.9rem",
        fontFamily: "Verdana",
        color: "white",
        paddingTop: "0.3rem",
    },
    descriptionFont: {
        textJustify:"start",
        fontSize: "1rem",
        fontFamily: "Verdana",
    }
});

function SpecificRecommendation(props) {
    const classes = useStyles();
    return (
        <Grid container id="specificRecommendation">
            <Grid item xs={8}>
                <Grid item xs={12}>
                    <Box border={1} borderRadius="borderRadius" className={classes.boxClass}>
                        <Grid container xs={12}>
                            <Grid item xs={2} className={classes.boxClass}>
                                <Card className={classes.thumbnailSpace}>
                                    <CardMedia
                                        component="img"
                                        image={props.sourceImage}
                                    />
                                </Card>
                            </Grid>
                            <Grid item xs={9}>
                                <Grid item xs={12}>
                                    <Box textAlign="left">
                                        <Typography className={classes.fontFamilyTitle}>
                                            {props.title}
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid container xs={12}>
                                    <Grid item xs={4}>
                                        <Box textAlign="left">
                                            <Typography>
                                                Publicado hace 7 horas
                                        </Typography>
                                        </Box>
                                    </Grid>
                                    {/* Arreglar esta sección */}
                                    <Grid item xs={7}>

                                    </Grid>
                                    <Grid item xs={1} >
                                        <Box borderRadius="50%" className={classes.score}>
                                            <Typography className={classes.scoreFont}>
                                                4.2
                                        </Typography>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Box borderRadius="borderRadius" className={classes.boxClass} textAlign="left">
                                <Typography className={classes.descriptionFont}>
                                    {props.description}
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item>
                            <Box >
                                <Button>

                                </Button>
                            </Box>
                        </Grid>
                    </Box>
                </Grid>
                
            </Grid>
        </Grid>
    );
}


export default SpecificRecommendation;