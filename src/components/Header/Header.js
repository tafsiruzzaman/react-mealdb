import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';
import './Header.css'

const Header = () => {
    const activeStyle = {
        fontWeight: "bold"
    };
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className="bg-color">
                <Container>
                    <NavLink to="/home">
                        <Navbar.Brand>
                            <img src={logo} width="130" height="40" className="d-inline-block align-top" alt="React Bootstrap logo"/>
                        </Navbar.Brand>
                    </NavLink>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto text-center">
                            <NavLink activeStyle={activeStyle} className="text-decoration-none my-2 me-4 text-color" to="/home">Home</NavLink>
                            <NavLink activeStyle={activeStyle} className="text-decoration-none my-2 me-4 text-color" to="/meals">Meals</NavLink>
                            <NavLink activeStyle={activeStyle} className="text-decoration-none my-2 me-4 text-color" to="/categories">Categories</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>      
        </div>
    );
};

export default Header;