import React from 'react'
import { Col, Container, ListGroup, Navbar, Row } from 'react-bootstrap'
import { useAppSelector } from '../hooks/redux'

export default function FavoritesPage() {
  const { favourites } = useAppSelector(state => state.github);

  if (favourites.length === 0) {
    return (
      <Container className="mt-2">
        <h3>No added items.</h3>
      </Container>
    )
  }
  return (
    <Container className="mt-2">
      <Row>
        <Col>
          <ListGroup>
            { favourites?.map(el => (
              <ListGroup.Item key="el">
                <Navbar.Brand>
                  { el }
                </Navbar.Brand>
              </ListGroup.Item>
            )) }
          </ListGroup>
        </Col>
      </Row>
    </Container>
  )
}