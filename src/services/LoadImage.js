import React, {useEffect, useState} from "react";
import AzureService from "./AzureService";

export default function (fileName, containerName, radius) {

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
        <div style={{
            background: `url(${image})`,
            backgroundRepeat: 'no-repeat',
            height:`100%`,
            backgroundPosition:'center',
            backgroundSize: 'cover',
            width:`100%`,
            borderRadius:`${radius}%`
        }}/>
    )

}
