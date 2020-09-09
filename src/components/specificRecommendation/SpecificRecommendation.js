import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Box, Card, CardMedia, Typography, Button, Avatar } from '@material-ui/core';
import HoverRating from './RatingRecommendation';
import FormDialog from './ReportDialog';
import ListCategories from '../ListCategories';

const useStyles = makeStyles({
    boxClass: {
        margin: "0.7rem",
        padding: '0.5rem',
        backgroundColor: "#242847",
    },
    thumbnailSpace: {
        maxWidth: "7rem",
        maxHeight: "4rem",
    },
    fontFamilyTitle: {
        color: "#B3B8E0",
        fontSize: "1.4rem",
        fontFamily: "Verdana",
    },
    fontFamilyText: {
        fontSize: "1rem",
        fontFamily: "Verdana",
        color: "#B3B8E0",
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
        color: "#B3B8E0",
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
    profileBox: {
        margin: "0.7rem",
        padding: '0.5rem',
        width: "auto",
        backgroundColor: "#242847",
        color: "#B3B8E0",
    },
    categoriesBox: {
        margin: "0.7rem",
        padding: '0.5rem',
        backgroundColor: "#B3B8E0",
    }
});

function SpecificRecommendation(props) {
    const classes = useStyles();

    const calculatePublication = (postDate) => {
        let actualDate = new Date();
        let hours = Math.floor(Math.abs(actualDate - postDate) / 36e5);
        if (hours >= 24) {
            let days = Math.floor(hours / 24);
            return "Posted " + days + " days ago";
        } else {
            return "Posted " + hours + " hours ago";
        }

    };

    let colorScore = props.score > 3.8 ? "#418525" : props.score < 2.8 ? "#C77938" : "#C7B117";


    return (
        <Grid container id="specificRecommendation">
            <Grid container xs={8}>
                <Box boxShadow={3} borderRadius="borderRadius" className={classes.boxClass} >
                    <Grid container xs={12}>
                        {/* Uso de la imagen relacionada a la recomendación. */}
                        <Grid item xs={2} className={classes.boxClass}>
                            <Card className={classes.thumbnailSpace}>
                                <CardMedia
                                    component="img"
                                    image={props.sourceImage}
                                />
                            </Card>
                        </Grid>
                        <Grid item xs={9}>
                            {/*Uso del titulo de la recomendación. */}
                            <Grid item xs={12}>
                                <Box textAlign="left">
                                    <Typography className={classes.fontFamilyTitle}>
                                        {props.title}
                                    </Typography>
                                </Box>
                            </Grid>
                            {/* Uso de la fecha de publicación. */}
                            <Grid container xs={12}>
                                <Grid item xs={4}>
                                    <Box textAlign="left">
                                        <Typography style={{ color: "#B3B8E0" }}>
                                            {calculatePublication(props.postDate)}
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid container xs={8} direction="row" justify="flex-end" alignItems="flex-end" alignContent="flex-end" spacing={2}>
                                    <Grid item>
                                        <HoverRating />
                                    </Grid>
                                    {/* Uso del score asociado a la recomendación. */}
                                    <Grid item>
                                        <Box borderRadius="50%" className={classes.score} style={{ backgroundColor: colorScore }}>
                                            <Typography className={classes.scoreFont} align="center">
                                                {props.score}
                                            </Typography>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    {/* Uso de la descripción dada a una recomendación en especifico. */}
                    <Grid item>
                        <Box borderRadius="borderRadius" className={classes.boxClass}>
                            <Typography className={classes.descriptionFont} align="justify">
                                {props.description}
                            </Typography>
                        </Box>
                    </Grid>
                    {/* Uso del enlace relacionado a la recomendación.*/}
                    <Grid item>
                        <Box align="center">
                            <a href={props.link} style={{ color: "#B3B8E0" }}>Link aquí</a>
                        </Box>
                    </Grid>
                    <Grid>
                        <Grid container direction="row" justify="flex-end" alignItems="flex-end" alignContent="flex-end" spacing={1}>
                            <Grid item>
                                <Button variant="contained" color="primary">Save</Button>
                            </Grid>
                            <Grid item>
                                <FormDialog />
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
            <Grid container xs={4}
                direction="row"
                justify="flex-start"
                alignItems="flex-start">
                <Grid item xs={10}>
                    <Box boxShadow={3} borderRadius="borderRadius" className={classes.profileBox} >
                        <Grid container spacing={0}
                            direction="column"
                            alignItems="center"
                            justify="center">
                            {/* Aquí uso el nombre de usuario y el enlace a la imagen de perfil.*/}
                            <Grid item>
                                <Avatar alt={props.author.username} src={props.author.profileImg} className={classes.avatarSize} />
                            </Grid>
                            {/* Aquí uso el nombre de usuario*/}
                            <Grid item>
                                <Typography variant="h4">
                                    {props.author.username}
                                </Typography>
                            </Grid>
                            <hr style={{
                                width: "13rem",
                            }} />
                            {/*Descripción del usuario.*/}
                            <Grid>
                                <Typography align="center" style={{ color: "#B3B8E0" }}>
                                    {props.author.description}
                                </Typography>

                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
                {/* Uso de las categorias asociadas a la recomendación.*/}
                <Grid item xs={10}>
                    <Box className={classes.categoriesBox}>
                        <ListCategories content={props.categories} />
                    </Box>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default SpecificRecommendation;