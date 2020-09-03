import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Box, Card, CardMedia, Typography, Button, Avatar } from '@material-ui/core';
import HoverRating from './RatingRecommendation';
import FormDialog from './ReportDialog';

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
        textJustify: "start",
        fontSize: "1rem",
        fontFamily: "Verdana",
    },
    avatarSize: {
        width: "7rem",
        height: "7rem",
    },
    divider: {
        width: "400px",
        borderTop: "1px solid #f8f8f8",
        borderBottom: "1px solid rgba(0, 0, 0, 0.2)",
    },
});

function SpecificRecommendation(props) {
    const classes = useStyles();
    const changeScore= (score) => {
        props.score=score;
    };
    return (
        <Grid container id="specificRecommendation">
            <Grid item xs={8}>
                <Box boxShadow={3} borderRadius="borderRadius" className={classes.boxClass} >
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
                                <Grid container xs={8} direction="row" justify="flex-end" alignItems="flex-end" alignContent="flex-end" spacing={2}>
                                    <Grid item>
                                        <HoverRating />
                                    </Grid>
                                    <Grid item>
                                        <Box borderRadius="50%" className={classes.score}>
                                            <Typography className={classes.scoreFont}>
                                                {props.score}
                                            </Typography>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Box borderRadius="borderRadius" className={classes.boxClass}>
                            <Typography className={classes.descriptionFont} align="justify">
                                {props.description}
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item>
                        {props.link}
                    </Grid>
                    <Grid>
                        <Grid container direction="row" justify="flex-end" alignItems="flex-end" alignContent="flex-end" spacing={1}>
                            <Grid item>
                                <Button variant="outlined" color="primary">Save</Button>
                            </Grid>
                            <Grid item>
                                <FormDialog />
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>

            </Grid>
            <Grid container xs={4}>
                <Grid item xs={12}>
                    <Box boxShadow={3} borderRadius="borderRadius" className={classes.boxClass} >
                        <Grid container spacing={0}
                            direction="column"
                            alignItems="center"
                            justify="center">
                            <Grid item>
                                <Avatar alt="Stilink" src="/img/profile_image.jpg" className={classes.avatarSize} />
                            </Grid>
                            <Grid item>
                                <Typography variant="h4">
                                    {props.author.username}
                                </Typography>
                            </Grid>
                            <br />
                            <Grid>
                                {props.author.description}
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    
                </Grid>
            </Grid>
        </Grid>
    );
}


export default SpecificRecommendation;