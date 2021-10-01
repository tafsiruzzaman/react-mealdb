import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';

const Category = (props) => {
    const { strCategoryThumb, strCategory } = props.category;
    const history = useHistory();

    const handleCategory = () => {
        history.push(`/category/${strCategory}`)
    }
    return (
        <div onClick={handleCategory}>
            <Col>
                <Card className="shadow h-100">
                    <Card.Img variant="top p-2" src={strCategoryThumb} />
                    <Card.Body>
                        <Card.Title className="text-center">{strCategory}</Card.Title>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Category;