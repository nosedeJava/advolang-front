import {Box, Heading, Layer} from "grommet";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import React, {useState} from "react";
import RequestService from "../../../services/RequestService";

export default function LayerCategory(props){

    const [category, setCategory] = useState(undefined);

    function handleAccept(){
        props.setCategories(prevState => props.categories.concat(category));
        props.setShow(false);
        postCategory();
    }

    function postCategory(){
        const newCategory = {
            value: category.toLowerCase(),
            popularity: 0
        }
        RequestService.post("/api/spanish/categories", newCategory)
            .then(response => console.log(response.status))
            .catch(error => {
                if (error.response){
                    alert("The category already exist");
                    console.info(error.response.status);
                }else {
                    alert("Server error");
                    console.info(error.message);
                }
            })
    }

    function handleChange(event){
        setCategory(event.target.value);
    }

    return(
        <Layer
            onEsc={() => props.setShow(false)}
            onClickOutside={() => props.setShow(false)}
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
    )
}