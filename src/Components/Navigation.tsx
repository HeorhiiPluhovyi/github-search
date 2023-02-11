import React from 'react';
import { Navbar } from 'react-bootstrap';
import Container from 'react-bootstrap/esm/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand as={Link} to="/"> GitHub Search </Navbar.Brand>
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/favorites">Favorites Page</Nav.Link>
            </Nav>
          </Container>
      </Navbar>
    </>
  )
}