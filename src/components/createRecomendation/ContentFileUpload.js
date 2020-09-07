import IconButton from "@material-ui/core/IconButton";
import {AttachFile, PhotoCamera} from "@material-ui/icons";
import React, {useEffect, useState} from "react";
import './css/FileContentUpload.css';
import AzureService from "../../services/AzureService";
import {useDispatch} from "react-redux";
import AllActions from "../../redux/actions/AllActions";

export default function ContentFileUpload(props) {

    const [file, setFile] = useState(null);
    const dispatch = useDispatch();

    useEffect( () => {
        function uploadFile(){
            if(file){
                AzureService.putFile(file.name, file)
                    .then(response => console.log(response.status));
            }
        }
        if (props.flag){
            uploadFile();
        }
    }, [file, dispatch, props.type, props.flag]);

    function handleFile(event) {
        setFile(event.target.files[0]);
        dispatch(
            AllActions
                .CreateRecommendationActions
                .updateRecommendation({[props.type]: event.target.files[0].name})
        )
    }

    return(
        <div className="content-section">
            {props.type==='file'?<p>Please select the file to upload</p>:<p>Please select an image as thumbnail view</p>}
            <div className="input-file">
                <input accept={'*/*'} type="file" id={props.type} onChange={handleFile}/>
                <label htmlFor={props.type}>
                    <IconButton
                        color="primary"
                        aria-label="upload picture"
                        component="span"
                    >
                        {props.type === 'file'?<AttachFile/>:<PhotoCamera/>}
                    </IconButton>
                </label>
                {file ? (
                    <p>{file.name}</p>
                ) : (
                    <p>No {props.type} selected yet!</p>
                )}
            </div>
        </div>
    );
}
