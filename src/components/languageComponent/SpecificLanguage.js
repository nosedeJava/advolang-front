import React, { useEffect } from 'react';
import RequestService from "../../services/RequestService";
import { Grid, CardMedia, Card, Typography, Box, Button } from '@material-ui/core';
function SpecificLanguage(props) {
    let username = JSON.parse(localStorage.getItem("user")).id;
    let language = props.language.toLowerCase();
    let [isSub, setSub] = React.useState(false);
    useEffect(() => {
        const subsFunct = async () => {
            const res = await RequestService.post("/api/" + language + "/subscription?username="+username);
            if (res.data === "Ok") {
                setSub(false)
                await RequestService.delete("/api/" + language + "/subscription?username="+username);
            } else {
                setSub(true)
            }
        }
        subsFunct();
    }, []);
    const isSubscribedHandler = async () => {
        if(isSub){
            await RequestService.delete("/api/" + language + "/subscription?username="+username);
            setSub(false)
        }else{
            await RequestService.post("/api/" + language + "/subscription?username="+username);
            setSub(true)
        }
    }
    return (
        <Box pt={1}>
            <Grid
                container
                direction="row"
                spacing={1}
            >
                <Grid item xs={2} >

                </Grid>
                <Grid item xs={1} justuf className="generalClassImage" spacing={1} direction="column">
                    <Box className="thumbnailSpace">
                        <Card>
                            <CardMedia
                                component="img"
                                image={"/img/" + language + ".png"}
                            />
                        </Card>
                    </Box>
                </Grid>
                <Grid item xs={2}>
                    <Typography variant="h5" component="h2" style={{ "color": "lightgray", fontSize: "2vw" }}>
                        {props.language}
                    </Typography>
                </Grid>
                <Grid item xs={3} classNmae="buttonStyleBox"  >
                    <Box mt={0.5} pl={0.5}>
                        <Button variant={isSub?"outlined":"contained"} color="primary" size="small" onClick={async () => await isSubscribedHandler()}>
                            {isSub?"unsubscribe":"subscribe"}
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default SpecificLanguage;
