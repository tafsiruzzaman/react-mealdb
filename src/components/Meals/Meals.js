import React, { useEffect, useState } from 'react';
import { FormControl, InputGroup, Row } from 'react-bootstrap';
import Meal from '../Meal/Meal';

const Meals = () => {
    const [searchText, setSearchText] = useState('');
    const [meals, setMeals] = useState([])
    const handelInput = e => {
        const searchTextValue = e.target.value;
        setSearchText(searchTextValue);
    }
    useEffect( () => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
        .then(res => res.json())
        .then(data => setMeals(data.meals))
    }, [searchText])
    return (
        <div className="container mb-5">
            <InputGroup onChange={handelInput} className="my-3 w-75 mx-auto">
                <FormControl placeholder="search food"/>
            </InputGroup>
            <Row xs={1} md={2} lg={4} className="gy-4 gx-lg-4">
                {
                    meals.map(meal => <Meal key={meal.idMeal} meal={meal}></Meal>)
                }
            </Row>
        </div>
    );
};

export default Meals;