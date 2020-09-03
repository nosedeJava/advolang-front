import React, {useEffect, useState} from "react";
import AzureService from "./AzureService";

export default function (props) {

    const [image, setImage] = useState(null);

    useEffect(() => {
        AzureService.getFile(props.fileName)
            .then(response => {
                const blob = new Blob([response.data]);
                const url = URL.createObjectURL(blob);
                setImage(url);
            })
    })

    return(
        <img src={image} alt=""/>
    )

}
