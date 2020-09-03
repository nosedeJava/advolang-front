import React, {useState} from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import "./AddCategory.css";
import Button from "@material-ui/core/Button";
import {Box, Heading, Layer} from "grommet";

export default function AddCategory() {

    const [categories, setCategories] = useState(['Music']);
    const [category, setCategory] = useState('');
    const [show, setShow] = useState(false);
    const [selectedCategories, setSelectedCategories] = useState([]);

    function handleAccept(){
        setCategories(prevState => categories.concat(category));
        setShow(false);
    }

    function handleChange(event){
        setCategory(event.target.value);
    }

    function handleChangeInput(event, values){
        setSelectedCategories(values);
    }

    return (
        <div className="category-container">
            <div className="select">
                <Autocomplete
                    multiple
                    id="tags-standard"
                    options={categories}
                    getOptionLabel={(option) => option}
                    onChange={handleChangeInput}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            variant="standard"
                            label="Multiple values"
                            placeholder="Categories"
                            onChange={value => handleChangeInput(value)}
                        />
                    )}
                />
            </div>
            <Button className="button" variant={"contained"} onClick={() => setShow(true)}>
                New Category
            </Button>
            {show && (
                <Layer
                    onEsc={() => setShow(false)}
                    onClickOutside={() => setShow(false)}
                    position="center"
                    className="layer"
                >
                    <Box align="center" pad={"medium"} gap="medium">
                        <Heading level={3} margin="none">
                            New category
                        </Heading>
                        <TextField
                            fullWidth
                            label={'Category name'}
                            placeholder="Please set a name"
                            onChange={handleChange}
                        />
                        <Button variant={"contained"} onClick={handleAccept} className="buttonLayer">
                            Accept
                        </Button>
                    </Box>
                </Layer>
            )}
        </div>
    );
}
