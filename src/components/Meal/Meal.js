import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Meal = (props) => {
    const {idMeal, strMeal, strMealThumb, strArea, strInstructions} = props.meal;
    return (
        <div>
            <Col>
                <Card className="shadow h-100">
                    <Card.Img variant="top p-2" src={strMealThumb} />
                    <Card.Body>
                        <Card.Title>{strMeal}</Card.Title>
                        <Card.Text>
                            {strInstructions.slice(0, 100)}
                        </Card.Text>
                        <Card.Text>
                            Area: {strArea}
                        </Card.Text>
                    </Card.Body>
                    <Link to={`/meal/${idMeal}`}>
                        <button type="button" className="btn btn-warning ms-3 mb-3"><span className="text-secondary">More Details</span></button>
                    </Link>
                </Card>
            </Col>
        </div>
    );
};

export default Meal;