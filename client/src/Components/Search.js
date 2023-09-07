import React, { useEffect, useState } from "react";
import axios from 'axios';
import Button from "./Button";

function Search(){
    const [labels, setLabels] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/api/labels')
          .then((response) => {
            setLabels(response.data);
          })
          .catch((error) => {
            console.error('Error fetching labels:', error);
          });
        }, []);    
return(
    <div className="searchBar">
        
        {labels.map((label) => (
          <Button key={label.id} food={label.label}/>
        ))}
    </div>
)

}
export default Search