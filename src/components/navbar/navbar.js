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
                            <Nav.Link href="#skills" active={false}>Skills</Nav.Link>
                            <Nav.Link href="#workExp" active={false}>Work Experience</Nav.Link>
                            <Nav.Link href="#projects" active={false}>Projects</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
};

export default navbar;