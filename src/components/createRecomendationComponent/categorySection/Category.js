import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import AllActions from "../../../redux/actions/AllActions";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./Category.css";
import LayerCategory from "./LayerCategory";
import RequestService from "../../../services/RequestService";

export default function Category(){

    const [categories, setCategories] = useState([]);
    const [categoryList, setCategoryList] = useState([]);
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        RequestService.get('/api/categoryList')
            .then(response => setCategories(response.data))
            .catch(error => {
                if(error.response){
                    alert('Something was wrong');
                    console.info(error.response.status);
                }else{
                    alert('Server error');
                    console.info(error.message);
                }
            })
        setCategoryList([]);
    }, [])

    useEffect(() => {
        categories.map(category => categoryList.push(category.value));
    }, [categories, categoryList])

    function handleChangeInput(event, values){
        if (values.length === 0){
            dispatch(AllActions.CreateRecommendationActions.updateRecommendation({categories:[]}));
        }
        const category = categories.filter(cat => cat.value === values[values.length-1]);
        dispatch(
            AllActions
                .CreateRecommendationActions
                .updateCategory(category)
        )
    }

    return (
        <div className="category-container">
            <div className="select">
                <Autocomplete
                    multiple
                    id="tags-standard"
                    options={categoryList}
                    getOptionLabel={(option) => option}
                    onChange={handleChangeInput}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            variant="standard"
                            label="Multiple values"
                            placeholder="Categories"
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
                    setCategories={setCategoryList}
                    categories={categoryList}
                />
            )}
        </div>
    );
}