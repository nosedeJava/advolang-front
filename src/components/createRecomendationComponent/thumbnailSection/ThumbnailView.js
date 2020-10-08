import React, {useCallback, useEffect, useState} from "react";
import "./ThumbnailView.css";
import {useDropzone} from "react-dropzone";
import {useDispatch} from "react-redux";
import AllActions from "../../../redux/actions/AllActions";
import AzureService from "../../../services/AzureService";

export default function ThumbnailView(props){

    const [file, setFile] = useState(null);
    const dispatch = useDispatch();

    const onDrop = useCallback(acceptedFiles => {
        setFile(acceptedFiles[acceptedFiles.length -1]);
        dispatch(AllActions
            .CreateRecommendationActions
            .updateRecommendation({thumbnail: acceptedFiles[0].name})
        )
    }, [dispatch])
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

    useEffect(() => {
        if (props.flag){
            AzureService.putFile(file.name, file)
                .then(response => console.log(response.status));
        }
    }, [file, props.flag])

    return(
        <div className="cont">
            <div className="thumbnail-container">
                <h1>Select a thumbnail view</h1>
                <div {...getRootProps()} className="dropzone">
                    <input {...getInputProps()} />
                    {isDragActive && (
                        <h3>Drop the file here</h3>
                    )}
                    {!file && !isDragActive && (
                        <h3>Drag and drop a file or click to upload a file</h3>
                    )}
                    {file && (
                        <div className="file-loaded">
                            <h4><span>File:</span> {file.name}</h4>
                            {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                            <img src={URL.createObjectURL(file)} alt="This file isn't an image"/>
                        </div>
                    )}
                </div>
                {file && (
                    <h2>The image has been uploaded</h2>
                )}
            </div>
        </div>
    )
}
