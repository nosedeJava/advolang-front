import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles} from '@material-ui/core';
import {Header} from './Header';


const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export class TextCard extends React.Component {

  render(){

    const item = this.props.item;

    return (
        <Card className={useStyles.root} variant="outlined">
        <Header item={item}/>
        <CardContent>
          <Typography className={useStyles.title} color="textSecondary" gutterBottom>
            {item.titulo}
          </Typography>
          <Typography variant="h5" component="h2">
            {item.mensaje}
          </Typography>
          <Typography className={useStyles.pos} color="textSecondary">
            {item.feature}
          </Typography>
          <Typography variant="body2" component="p">
            {item.footer}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    );
  }
}
