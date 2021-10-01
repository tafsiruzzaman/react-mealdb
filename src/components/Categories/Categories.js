import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Category from '../Category/Category';

const Categories = () => {
    const [categories, setCategories] = useState([]);
    useEffect( () => {
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then(res => res.json())
        .then(data => setCategories(data.categories))
    }, [])
    return (
        <div className="container my-4">
            <Row xs={1} md={2} lg={3} className="gy-4 gx-lg-4">
                {
                   categories.map(category => <Category key={category.idCategory} category={category}></Category>) 
                }
            </Row>
        </div>
    );
};

export default Categories;