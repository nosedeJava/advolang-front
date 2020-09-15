import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import './RatingRecommendation.css';


const labels = (value)=>{
  let final_value='Useless';
  if(value>0.5 && value<=1){
    final_value='Useless+';
  }
  else if(value>1 && value<=1.5){
    final_value='Poor';
  }
  else if(value>1.5 && value<=2){
    final_value='Poor+';
  }
  else if(value>2 && value<=2.5){
    final_value='Ok';
  }
  else if(value>2.5 && value<=3){
    final_value='Ok+';
  }
  else if(value>3 && value<=3.5){
    final_value='Good';
  }
  else if(value>3.5 && value<=4){
    final_value='Good+';
  }
  else if(value>4 && value<=4.5){
    final_value='Excellent';
  }
  else if(value>4.5 && value<=5){
    final_value='Excellent+';
  }

  return final_value;
}


export default function HoverRating(props) {
  const [value, setValue] = React.useState(2.5);
  const [hover, setHover] = React.useState(-1);

  /* Función que debería postear el rating que selecciono el usuario. */
  const postRating = (value) => {
    if(value!==null){
      setValue(value);
      props.selectedMatch(value)
    }
  };

  return (
    <div className="hooverDiv">
      <Rating
        name="hover-feedback"
        value={value}
        precision={0.1}
        onChange={(event,newValue) => postRating(newValue)}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
      />
    {value !== null && <Box ml={2}>{labels(hover !== -1 ? hover : value)}</Box>}
    </div>
  );
}
