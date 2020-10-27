import React, {useEffect, useState} from "react";
import AzureService from "./AzureService";

export default function (fileName, containerName, width, height) {

    const [image, setImage] = useState(null);

    useEffect(() => {
        AzureService.getFile(fileName, containerName)
            .then(response => {
                const blob = new Blob([response.data]);
                const url = URL.createObjectURL(blob);
                setImage(url);
            })
    },[containerName, fileName])

    return(
        <img src={image} style={{width: width, height: height}} alt="No_Image"/>
    )

}
