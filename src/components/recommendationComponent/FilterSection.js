import React, { useState } from 'react';
import { Grid, Box, TextField, InputAdornment, Chip, MenuItem, InputLabel, Select, FormControl, Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import Autocomplete from '@material-ui/lab/Autocomplete';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import './FilterSection.css';


function FilterSection(props) {
  // props.lang dice que buscar para la lista de categories si es none,
  // es una lista general de los idiomas a los que esta suscrito,
  // o si es un idioma en particular, se busca las categorias disponibles para ese idioma
  // de momento se usa con una lista quemada pero el punto seria traer esa informacion de back
  let listCategories = ["videos", "gameplay", "videogames", "reddit"]
  const [categories, setCategories] = React.useState([]);
  const [level, setLevel] = useState("");
  const [search, setSearch] = useState("");
  const handleLevelChange = (e) => setLevel(e.target.value);
  const handleSearchChange = (e) => setSearch(e.target.value);
  const handleCategorySelected = (event, values) => setCategories(values);
  const submitFilter = () => props.renderFilterFunction(search, level, categories);

  return (
      <Grid container spacing={0} className="mainFilterGrid" direction="column" >
        <Grid item xs={1} />
          <Grid className="filterGridStyle" >
            <Box className="filterStyle" borderRadius="borderRadius" >
              <Grid container spacing={1} direction="row" className="filterSectionGrid" >
                <TextField id="outlined-basic" label="Search" variant="outlined" className="separation" style={{ width: "20rem" }}
                  InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                          <SearchIcon />
                        </InputAdornment>
                    ),
                  }}

                  onChange={(e)=>handleSearchChange(e)}
                />
                <Grid item  className="separation">
                  <Autocomplete
                    fullWidth
                    multiple
                    limitTags={1}
                    id="categories"
                    options={listCategories}
                    onChange={handleCategorySelected}
                    className="separation"
                    renderTags={(value, getTagProps) =>
                        value.map((option, index) => (
                            <Chip
                                label={option}
                                color="primary"
                                style={{ backgroundColor: "#242847" }}
                                {...getTagProps({ index })}
                            />
                        ))
                    }

                    renderInput={(params) => (
                        <TextField {...params} variant="outlined" label="Filters" placeholder="Category" />
                    )}
                />

              </Grid>

              <FormControl variant="outlined" className="separation" style={{ width: "9rem" }}>
                <InputLabel id="levelLabel">Level</InputLabel>
                <Select
                    labelId="levelLabel"
                    id="levelSelect"
                    value={level}
                    onChange={e => handleLevelChange(e)}
                    label="Level"
                >

                  <MenuItem value={"Any"}>Any </MenuItem>
                  <MenuItem value={"Beginner"}>Beginner</MenuItem>
                  <MenuItem value={"Intermediate"}>Intermediate</MenuItem>
                  <MenuItem value={"Advanced"}>Advanced</MenuItem>
                </Select>
              </FormControl>

              <Box className="buttonStyle">
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => submitFilter()}
                    endIcon={<ArrowForwardIosIcon />}
                >
                  Filter
                </Button>
              </Box>
            </Grid>
          </Box>
        </Grid>
      </Grid>
  );
}

export default FilterSection;
