import React, {useState} from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import "./css/AddCategory.css";
import Button from "@material-ui/core/Button";
import {useDispatch} from "react-redux";
import LayerCategory from "./LayerCategory";
import AllActions from "../../redux/actions/AllActions";

export function AddCategory() {

    const [categories, setCategories] = useState(['Music']);
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();

    function handleChangeInput(event, values){
        dispatch(
            AllActions
                .CreateRecommendationActions
                .updateRecommendation({categories: values})
        )
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
                <LayerCategory
                    setShow={setShow}
                    setCategories={setCategories}
                    categories={categories}
                />
            )}
        </div>
    );
}
