import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';
import './VideoCard.css';
import {Header} from './Header';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

export class VideoCard extends React.Component {

  render () {
    const item = this.props.item;

    return (
      <Card className={useStyles.root} variant="outlined">
        <Header item={item}/>
        <div className={useStyles.details}>
          <CardContent className={useStyles.content}>
            <Typography component="h5" variant="h5">
              {item.titulo}
            </Typography>
            <br /> <br />

            <div className="video-responsive">
              <iframe
                title="video"
                src={item.video_url}
                frameborder="0"
                allowfullscreen="allowfullscreen">
              </iframe>
            </div>
            <Typography variant="subtitle1" color="textSecondary">
              {item.descripcion}
            </Typography>

          </CardContent>
        </div>




      </Card>
    );
  }
}
