
import Link from "@material-ui/core/Link";
import React from "react";

export default function Copyright(){
    return (
        <p style={{textAlign:'center', color: 'white'}}>
            {'Copyright © '}
            <Link color={"inherit"} href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                Advolang
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </p>
    );
}