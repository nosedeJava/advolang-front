import React from "react";
import "./Post.css";
import TextField from "@material-ui/core/TextField";
import {useDispatch} from "react-redux";
import AllActions from "../../../redux/actions/AllActions";

export default function Post(){

    const dispatch = useDispatch();

    function handleChange(event){
        dispatch(AllActions
            .CreateRecommendationActions
            .updateRecommendation({[event.target.name]: event.target.value})
        )
    }

    return(
        <div className="post-container">
            <div className="card">
                <TextField
                    label="Title"
                    variant="outlined"
                    fullWidth
                    placeholder="Set a title for your recommendation"
                    className="textField"
                    name="title"
                    onChange={handleChange}
                />
                <TextField
                    id="outlined-multiline-static"
                    label="Description"
                    multiline
                    rows={6}
                    placeholder={'Set a description for your recommendation'}
                    variant="outlined"
                    className="textField"
                    name="description"
                    onChange={handleChange}
                />
            </div>
        </div>
    )
}
