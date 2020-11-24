import React from 'react';
import { useParams } from "react-router-dom";
import PrincipalView from "../recommendationComponent/PrincipalView"
function PrincipalViewLanguage(props){
    const params = useParams();
    return (
      <div>
       <PrincipalView type="lang" language={params.language} />
     </div>
    );
}

export default PrincipalViewLanguage;
