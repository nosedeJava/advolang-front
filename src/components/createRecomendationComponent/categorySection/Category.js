import React, {useState} from "react";
import {useDispatch} from "react-redux";
import AllActions from "../../../redux/actions/AllActions";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./Category.css";
import LayerCategory from "./LayerCategory";

export default function Category(){
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