import React from 'react';

function SpecificLanguage(props) {
    return (
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
        >
            <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
            >
                <Grid item xs={2} className="generalClassImage" container spacing={0} direction="column">
                    <Card className="thumbnailSpace">
                        <CardMedia
                            component="img"
                            image={"/img/"+props.language+".png"}
                        />
                    </Card>
                </Grid>
                <Grid item>
                    <Typography style={{"color":"#242847"}}>
                        {props.language}
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default SpecificLanguage;