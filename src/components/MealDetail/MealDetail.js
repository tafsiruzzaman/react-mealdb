import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const MealDetail = () => {
    const {mealId} = useParams();
    const [meal, setMeal] = useState({});
    useEffect( () => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
        .then(res => res.json())
        .then(data => setMeal(data))
    }, [mealId])
    return (
        <div>
            {mealId}
        </div>
    );
};

export default MealDetail;