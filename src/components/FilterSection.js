import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Grid, Box, TextField, InputAdornment, Chip } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import Autocomplete from '@material-ui/lab/Autocomplete';

const useStyles = makeStyles({
    filterStyle: {
        marginTop: "1rem",
        padding: "0.7rem",
    },
    TextFieldStyle: {
        borderWidth: '10px',
        borderColor: 'green !important'
    },
});
const CssTextField = withStyles({
    root: {
        '& label.Mui-focused': {
            color: '#242847',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#242847',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#242847',
            },
            '&:hover fieldset': {
                borderColor: '#242847',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#242847',
            },
        },
    },
})(TextField);
function FilterSection(props) {
    const classes = useStyles();
    let listCategories = ["videos", "gameplay", "videogames", "reddit"]
    return (
        <Grid container spacing={1}>
            <Grid item xs={1} ></Grid>
            <Grid item xs={8} >
                <Box border={2} borderColor="primary.main" className={classes.filterStyle} borderRadius="borderRadius" >

                    <CssTextField id="outlined-basic" label="Search" variant="outlined"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                        }}
                    />
                    <Autocomplete
                        multiple
                        limitTags={2}
                        id="categories"
                        size="small"
                        options={listCategories}
                        renderTags={(value, getTagProps) =>
                            value.map((option, index) => (
                                <Chip
                                    variant="outlined"
                                    label={option}
                                    size="small"
                                    clickable 
                                    color="primary" 
                                    {...getTagProps({ index })}
                                />
                            ))
                        }
                        renderInput={(params) => (
                            <TextField {...params} variant="outlined" label="Filters" placeholder="Category" />
                        )}
                    />
                </Box>
            </Grid>
        </Grid>
    );
}

export default FilterSection;