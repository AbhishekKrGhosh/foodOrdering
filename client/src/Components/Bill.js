import React from "react";
import {}  from '@mui/material'
import Dropdown from "./Dropdown";
import Total from "./Total";

function Bill(){
return(
    <div className="bill">
        <h3>+ SELECT</h3>
        <Dropdown/>
        <Total/>
    </div>
)

}
export default Bill