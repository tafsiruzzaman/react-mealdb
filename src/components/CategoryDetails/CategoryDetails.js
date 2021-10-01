import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import Meal from '../Meal/Meal';

const CategoryDetails = () => {
    const {categoryName} = useParams();
    const [meals, setMeals] = useState([]);
    useEffect( () => {
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`)
        .then(res => res.json())
        .then(data => setMeals(data.meals))
    } , [categoryName])
    return (
        <div className="container my-5">
            <Row xs={1} md={2} lg={4} className="gy-4 gx-lg-4">
                {
                    meals.map(meal => <Meal key={meal.idMeal} meal={meal}></Meal>)
                }
            </Row>
        </div>
    );
};

export default CategoryDetails;