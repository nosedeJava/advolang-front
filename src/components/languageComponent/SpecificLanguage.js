import React from 'react';
import { Grid, CardMedia, Card, Typography, Box } from '@material-ui/core';
function SpecificLanguage(props) {
    return (
        <Grid
            container
            direction="row"
        >
            <Grid item xs={2} >

            </Grid>
            <Grid item xs={1} justuf className="generalClassImage" spacing={1} direction="column">
                <Box pl={3}>
                    <Card className="thumbnailSpace">
                        <CardMedia
                            component="img"
                            image={"/img/" + props.language.toLowerCase() + ".png"}
                        />
                    </Card>
                </Box>
            </Grid>
            <Grid item xs={3}>
                <Typography variant="h5" component="h2" style={{ "color": "#242847", fontSize: "2.2rem" }}>
                    {props.language}
                </Typography>
            </Grid>
        </Grid>
    );
}

export default SpecificLanguage;