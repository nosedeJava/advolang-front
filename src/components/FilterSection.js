import React, { useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Grid, Box, TextField, InputAdornment, Chip, MenuItem, InputLabel, Select, FormControl, Icon, Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import Autocomplete from '@material-ui/lab/Autocomplete';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
const useStyles = makeStyles((theme) => ({
    separation: {
        marginRight: "1.5rem"
    },
    filterStyle: {
        marginTop: "1rem",
        padding: "0.7rem",
    },
    TextFieldStyle: {
        borderWidth: '10px',
        borderColor: 'green !important'
    },
}));

function FilterSection(props) {
    const classes = useStyles();
    let listCategories = ["videos", "gameplay", "videogames", "reddit"]
    const [level, setLevel] = useState("Any");
    const [search, setSearch] = useState("");
    const [listFilters, setlistFilters] = useState([]);
    const handleLevelChange = (e) => setLevel(e.target.value)
    const handleSearchChange = (e) => setSearch(e.target.value)
    const handleOnTagsChange = "";
    return (
        <Grid container spacing={1}>
            <Grid item xs={1} ></Grid>
            <Grid item xs={8} >
                <Box border={2} borderColor="primary.main" className={classes.filterStyle} borderRadius="borderRadius" >
                    <Grid container >
                        <TextField id="outlined-basic" label="Search" variant="outlined" className={classes.separation} style={{ width: "20rem" }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon />
                                    </InputAdornment>
                                ),
                            }}
                            onChange={(e)=>handleSearchChange(e)}
                        />
                        <Grid item xs={3} className={classes.separation}>
                            <Autocomplete
                                fullWidth
                                multiple
                                limitTags={1}
                                id="categories"
                                options={listCategories}
                                className={classes.separation}
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
                        <FormControl variant="outlined" className={classes.formControl} className={classes.separation} style={{ width: "9rem" }}>
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
                        <Button
                            style={{height:"3.4rem"}}
                            variant="contained"
                            color="primary"
                            className={classes.button}
                            endIcon={<ArrowForwardIosIcon />}
                        >
                            Filter
                        </Button>
                    </Grid>
                </Box>
            </Grid>
        </Grid >
    );
}

export default FilterSection;