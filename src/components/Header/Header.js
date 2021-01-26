import React from "react";
import { Container, Navbar, Form, Button } from "react-bootstrap";
import Menu from "./Menu";

import "./header.css";
import logo from "../../assets/images/logo.png";

const Header = () => {
    return (
        <header>
            <Container>
                <Navbar variant="light" collapseOnSelect expand="lg">
                    <Navbar.Brand href="/">
                        <img
                            alt="Transit Card"
                            src={logo}
                            width="141px"
                            height="40px"
                            className="d-inline-block align-top"
                        />{" "}
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-header" />
                    <Navbar.Collapse id="responsive-header">
                        <Navbar.Text className="mr-auto">
                            <a href="tel:+370 5 2607900">+370 5 2607900</a>
                            <span>08:00 iki 17:00</span>
                        </Navbar.Text>
                        <Form inline>
                            <Button
                                variant="outline-primary"
                                className="btn-grey"
                            >
                                Mano Kabinetas
                            </Button>
                            <Button variant="primary" className="btn-yellow">
                                Užsakymo kortelė
                            </Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
            <Menu />
        </header>
    );
};

export default Header;
