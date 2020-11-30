import React, { useEffect } from 'react';
import './SponsorPost.css';
import { useHistory } from "react-router-dom";
import { componentDidMountGetAzure } from '../../services/Petitions.js';
import {Box, Card, CardContent, CardMedia, ButtonBase, CardActions, Grid} from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import BeenhereIcon from '@material-ui/icons/Beenhere';
import {redirectToSpecificRecom} from '../Auxiliar/Redirect';

export function SponsorPost(props) {

  let history = useHistory();

  const [loading, setLoading] = React.useState(true);
  const [postImage, setPostImage] = React.useState([]);

  useEffect(() => {
    componentDidMountGetAzure(setLoading, setPostImage, props.sponPost.thumbnail, props.sponPost.creator);
  }, []);

  const handleRecomRedirect = () => {
    redirectToSpecificRecom(props.sponPost.language, props.sponPost.creator, props.sponPost.id, history);
  }

  return (
    <Box className="sponsorPostGeneralBox">
      <ButtonBase className="sponsorPostButtonBase" onClick={handleRecomRedirect} >

        <Card className="sponsorPostCard">

          {
            loading ?
            <Skeleton animation="wave" variant="rect" className="thumbanilPostCardMedia" />
          :
            <CardMedia
              className="thumbanilPostCardMedia"
              image={postImage}
              title={props.sponPost.title}
            />
          }
        <CardContent className="sponsorPostCardContent">

            <Box className="sponsorPostCardTittleBox">
              {props.sponPost.title}
            </Box>

            <Box className="sponsorPostCardCreatorBox">
              {props.sponPost.creator}
            </Box>

          </CardContent>
          <CardActions className="sponsorPostCardFooter">
            {
              props.sponPost.promo &&

              <Box className="sponsorPostCardPromoBox">
                <Grid container direction="row" spacing={0} alignItems="center" className="sponsorPostCardPromoGrid" >
                  <Grid item className="sponsorPostCardItemText">
                  {"Promoted"}
                  </Grid>
                  <Grid item className="sponsorPostCardItemIcon">
                    <div className="sponsorPostCardItemIconDiv">
                    <BeenhereIcon style={{ fontSize: "2vw", color:"silver" }}/>
                    </div>
                </Grid>
              </Grid>
              </Box>
            }
          </CardActions>
        </Card>
      </ButtonBase>

    </Box>

  );
}
