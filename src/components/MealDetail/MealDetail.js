import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const MealDetail = () => {
    const {mealId} = useParams();
    const [meal, setMeal] = useState({});
    useEffect( () => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
        .then(res => res.json())
        .then(data => setMeal(data.meals[0]))
    }, [mealId]);
    return (
        <div className="container">
            <div className="row my-5">
                <div className="col-sm-12 col-md-5 d-flex justify-content-center align-items-center">
                    <img className="w-75" src={meal?.strMealThumb} alt="" />
                </div>
                <div className="col-sm-12 col-md-7 d-flex justify-content-start align-items-center">
                    <div>
                        <h3>Name: {meal?.strMeal}</h3>
                        <h4>Category : {meal?.strCategory}</h4>
                        <p>Details: {meal?.strInstructions}</p>
                        <p>Area: {meal?.strArea}</p>
                        <button className="btn btn-warning"><a className="text-decoration-none" href={meal?.strYoutube} target="blank">See recipi</a></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MealDetail;