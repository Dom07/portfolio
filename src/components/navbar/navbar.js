import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const navbar = (props) => {
    return (
        <div>
            <Navbar bg="light" expand="lg" fixed="top">
                <Container>
                    <Navbar.Brand href="#home">Dominic Devasahayam</Navbar.Brand>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            {/* fix this */}
                        </Nav>
                        <Nav>
                            <Nav.Link href="#aboutMe">About Me</Nav.Link>
                            <Nav.Link href="#projects">Projects</Nav.Link>
                            <Nav.Link href="#workExp">Work Experience</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
};

export default navbar;