import React from "react";
import { Container, Carousel, Button } from "react-bootstrap";

import hero from "../../assets/images/hero.png";
import "./main.css";

const Hero = () => {
    return (
        <Container>
            <Carousel controls={false}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={hero}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1>
                            Kuro kortelės ir paslaugos efektyviam autoparko
                            valdymui
                        </h1>

                        <Button variant="primary" className="btn-yellow big">
                            Užsakymo kortelė
                        </Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={hero}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h1>
                            Kuro kortelės ir paslaugos efektyviam autoparko
                            valdymui
                        </h1>

                        <Button variant="primary" className="btn-yellow big">
                            Užsakymo kortelė
                        </Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={hero}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h1>
                            Kuro kortelės ir paslaugos efektyviam autoparko
                            valdymui
                        </h1>

                        <Button variant="primary" className="btn-yellow big">
                            Užsakymo kortelė
                        </Button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
    );
};

export default Hero;
