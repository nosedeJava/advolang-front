import React from 'react';
import './Languages.css';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card, CardActionArea, CardContent, CardMedia, ButtonBase, Typography } from '@material-ui/core';
import { useHistory } from "react-router-dom";
const useStyles = makeStyles({
    root: {
        width: 300,
    },
    general:{
        paddingTop: "3rem"
    }
});

function Languages(props) {
    const classes = useStyles();
    let history = useHistory();
    let langs = ["Spanish", "English", "Italian", "Portuguese", "French", "German", "Russian", "Japanese"];
    const redirectSpecificLanguage = (lang) => {

        history.push(`/${lang}/recommendations`);
    }
    return (
        <div className="generalDiv">
            <Grid container spacing={2} direction="row"
                justify="center"
                alignItems="center"
                className={classes.general}
            >
                {
                    langs.map((lang, ind) => (
                        <Grid item key={ind} >
                            <Card className={classes.root}>
                                <ButtonBase className="specificLang" onClick={() => redirectSpecificLanguage(lang)} >
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            alt={lang}
                                            height="150"
                                            image={"/img/" + lang.toLowerCase() + ".png"}
                                            title={lang}
                                        />
                                        <CardContent style={{ "backgroundColor": "#454555" }}>
                                            <Typography gutterBottom variant="h5" component="h2" style={{ "color": "white" }}>
                                                {lang}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </ButtonBase>
                            </Card>
                        </Grid>
                    ))
                }
            </Grid>
        </div>
    );
}

export default Languages;