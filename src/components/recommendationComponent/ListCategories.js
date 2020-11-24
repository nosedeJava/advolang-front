import React from 'react';
import { Grid, Chip, Box, Typography} from '@material-ui/core';
import './ListCategories.css'


function ListCategories(props) {
    let catList = JSON.parse(JSON.stringify(props.content));

    let catSuscripValue;
    return (
      <Box className="generalCategoriesBox">
        <Grid container spacing={0} className="listCategoriesContainer">
            {catList.map((category, i) => (
              <Grid item key={"category-"+i} className="listCategoriesItem" align = "center" justify = "center" alignItems = "center">
                <Chip
                  label={<Typography style={{whiteSpace: 'normal', wordWrap: "break-word", fontSize: "1vw"}}>
                  {catSuscripValue = category.value ? category.value : category}</Typography>}
                  style={{maxWidth:"100%", height:"100%", backgroundColor:"#242847", color:"#B3B8E0", padding:"0.5vw", margin:"0.2vw 0 0.2vw 0"}}
                  component="a"
                  href={"#"+catSuscripValue}
                  clickable color="primary"
                  />
              </Grid>
            ))}
        </Grid>
      </Box>
    );
}

export default ListCategories;
