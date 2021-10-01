import React from 'react';
import './Home.css';
import { Button, Card, Col, Row } from 'react-bootstrap';
import top from '../../images/top.png';
import rec1 from '../../images/food1.jpg';
import rec2 from '../../images/food2.jpg';
import rec3 from '../../images/food3.png';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="container">
            <div className="row mb-5">
                <div className="col-sm-12 col-md-6 d-flex align-items-center">
                    <div className="ms-5">
                        <div className="fs-1 text-colour">
                            <h1><span className="text-span">Skip</span> The Diet,</h1>
                            <h1>Just Eat Healthy</h1>
                            <h1>With MealDb</h1>
                        </div>
                        <p className="mt-4">Imagine you don't need a diet because we provide <br/> healthy and delicious food for you!</p>
                        <Link to="/meals">
                            <Button variant="warning">Order Now</Button>
                        </Link>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 d-flex justify-content-center align-items-center">
                    <img className="img-fluid w-75" src={top} alt="" />
                </div>
            </div>
            <div className="text-colour">
                <h1 className="text-center">My recipies</h1>
                <p className="fs-5 text-center">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br />
                    Lorem Ipsum has been the industry's standard dummy text ever since the <br />
                    1500s.
                </p>
                <div className="mb-5">
                    <Row xs={1} md={2} lg={3} className="gy-4 gx-lg-4">
                        <Col>
                            <Card className="shadow">
                                <Card.Img variant="top p-2" src={rec1} />
                                <Card.Body>
                                    <Card.Title>Chocolate pie</Card.Title>
                                    <Card.Text>
                                        This is a longer card with supporting text below as a natural
                                        lead-in to additional content. This content is a little bit longer.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="shadow">
                                <Card.Img variant="top p-2" src={rec2} />
                                <Card.Body>
                                    <Card.Title>Vegetable steak</Card.Title>
                                    <Card.Text>
                                        This is a longer card with supporting text below as a natural
                                        lead-in to additional content. This content is a little bit longer.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="shadow">
                                <Card.Img variant="top p-2" src={rec3} />
                                <Card.Body>
                                    <Card.Title>Mushroom Soup</Card.Title>
                                    <Card.Text>
                                        This is a longer card with supporting text below as a natural
                                        lead-in to additional content. This content is a little bit longer.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default Home;