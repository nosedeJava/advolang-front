import React, {useEffect, useState} from "react";
import "./Content.css";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import {useDispatch, useSelector} from "react-redux";
import AllActions from "../../../redux/actions/AllActions";
import {TextField} from "@material-ui/core";
import {AttachFile} from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
import Category from "../categorySection/Category";

export default function Content(){

    const dispatch = useDispatch();
    const recommendation = useSelector(state => state.newRecommendation);
    const [file, setFile] = useState(null);

    useEffect(() => {
        dispatch(AllActions
            .CreateRecommendationActions
            .updateRecommendation({
                file: ''
            })
        )
        setFile(null);
    }, [dispatch, recommendation.contentType])

    function handleChange(event){
        dispatch(AllActions
            .CreateRecommendationActions
            .updateRecommendation({
                [event.target.name]: event.target.value
            })
        )
    }

    function handleFile(event) {
        setFile(event.target.files[0]);
        dispatch(
            AllActions
                .CreateRecommendationActions
                .updateRecommendation({file: event.target.files[0].name})
        )
    }

    return(
        <div className="recommendation-container">
            <div className="card">
                <h1>Select the content to upload</h1>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Content type</InputLabel>
                    <Select
                        name="contentType"
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={recommendation.contentType}
                        onChange={handleChange}
                        placeholder="Select the content type"
                    >
                        <MenuItem value={'Url'}>Url</MenuItem>
                        <MenuItem value={'File'}>Multimedia File</MenuItem>
                    </Select>
                </FormControl>
                {recommendation.contentType === 'Url' && (
                    <TextField
                        label="Url"
                        name="url"
                        onChange={handleChange}
                        fullWidth
                    />
                )}
                {recommendation.contentType === 'File' && (
                    <div className="input-file">
                        <input accept={'*/*'} type="file" id={'file'} onChange={handleFile}/>
                        <label htmlFor={'file'}>
                            <IconButton
                                color="primary"
                                aria-label="upload picture"
                                component="span"
                            >
                                <AttachFile/>
                            </IconButton>
                        </label>
                        {file ? (
                            <p>{file.name}</p>
                        ) : (
                            <p>No file selected yet!</p>
                        )}
                    </div>
                )}
                {file && (
                    <h4>The file has been uploaded</h4>
                )}
                <hr/>
                <h1>Set the categories</h1>
                <Category/>
            </div>
        </div>
    )
}