import React, {useEffect, useState} from 'react';
import './SavedRecomPost.css';
import { useHistory } from "react-router-dom";
import {ButtonBase} from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import CardMedia from '@material-ui/core/CardMedia';
import { useCoverCardMediaStyles } from '@mui-treasury/styles/cardMedia/cover';
import { Row, Item } from '@mui-treasury/components/flex';
import {getUserThumbByUsername, componentDidMountGetAzure} from '../../services/Petitions.js';
import {adaptJavaDate} from '../Auxiliar/AuxiliarTools';
import {redirectToSpecificRecom} from '../Auxiliar/Redirect';

export function SavedRecomPost(props) {

  let history = useHistory();

  const [loadingUserThumb, setLoadingUserThumb] = useState(true);
  const [loadingRecomThumb, setLoadingRecomThumb] = useState(true);

  const [userThumb, setUserThumb] = useState({});
  const [recomThumb, setRecomThumb] = useState({});


  const componentDidMount = async () => {
    getUserThumbByUsername(setLoadingUserThumb, '/api/users/'+ props.savedRecom.creator, setUserThumb);
    componentDidMountGetAzure(setLoadingRecomThumb, setRecomThumb, props.savedRecom.thumbnail , props.savedRecom.creator);
  }

  useEffect(() => {
      componentDidMount();
      window.scrollTo(0, 0);
  }, []);

  const handleRedirectSpecific = () => {
    redirectToSpecificRecom(props.savedRecom.language, props.savedRecom.creator, props.savedRecom.id, history)
  }

  const mediaStyles = useCoverCardMediaStyles();

  if (loadingUserThumb || loadingRecomThumb) {
    return <h2> Loading ...</h2>
  }

  return (
    <div className="savedRecomGeneralDiv">
      <ButtonBase className="savedRecomButtonBase" onClick={handleRedirectSpecific} >
        <Box className="savedRecomCardBox" pt={20}>
          <CardMedia image={recomThumb} className="savedRecomCard" classes={mediaStyles} />
          <Box className="savedRecomCardContent" p={2}>
            <Box position={'relative'} zIndex={1}>
              <Row p={0} gap={2}>
                <Item className="savedRecomAvatarItem">
                  <Avatar src={userThumb} variant="square"  style={{
                    width: "5vw",
                    height: "5vw",
                    boxShadow: "0 4px 12px 0 rgba(0,0,0,0.24)",
                    borderRadius: "0.2vw"}}/>
                </Item>
                <Item position={'middle'}>
                  <div className="savedRecomCardContentTitle">{props.savedRecom.title}</div>
                </Item>
              </Row>
              <Row mt={4} alignItems={'center'}>
                <Item>
                  <div className="savedRecomCardCreator">{props.savedRecom.creator}</div>
                </Item>
                <Item position={'right'}>
                  <div className="savedRecomCardDate">{adaptJavaDate(props.savedRecom.creationDate).split(" ")[0]}</div>
                </Item>
              </Row>
            </Box>
          </Box>
        </Box>
      </ButtonBase>
    </div>

  );
};
