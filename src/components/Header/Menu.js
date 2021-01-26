import React from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";

import "./header.css";

const Menu = () => {
    return (
        <Container>
            <Navbar
                collapseOnSelect
                expand="lg"
                variant="light"
                className="header__menu"
            >
                {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav"> */}
                <Nav className="mr-auto">
                    <Nav.Link href="#card">Transit Card</Nav.Link>
                    <Nav.Link href="#aboutCompany">Apie įmonę</Nav.Link>
                    <Nav.Link href="#order">Kortelių užsakymas</Nav.Link>
                    <Nav.Link href="#aboutCard">Apie kuro korteles</Nav.Link>
                    <Nav.Link href="#aboutCard">Apie kuro korteles</Nav.Link>
                    <Nav.Link href="#contacts">Kontaktai</Nav.Link>
                </Nav>
                <Nav>
                    <Button className="btn-minimap">Degalinių paieška</Button>
                </Nav>
                {/* </Navbar.Collapse> */}
            </Navbar>
        </Container>
    );
};

export default Menu;
