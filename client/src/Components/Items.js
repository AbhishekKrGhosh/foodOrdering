import React, { useEffect, useState } from "react";
import axios from 'axios';
import Card from "./Card";

function Items(){
    const [meals, setMeals] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/api/meals')
      .then((response) => {
        setMeals(response.data);
      })
      .catch((error) => {
        console.error('Error fetching meals:', error);
      });
  }, []);
return(
    <div>
        {meals.map((meal) => (
          <Card key={meal.id} title={meal.title} starter={meal.starter} img={meal.img} desert={meal.desert} price={meal.price}/>
        ))}
    </div>
)

}
export default Items