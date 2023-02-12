import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'

export default function PageNotFound() {
  return (
    <Container>
      <Col>
        <Row>
          <h1> Sorry something get wrong... </h1>
          <h2> Page not found </h2>
        </Row>
      </Col>      
    </Container>
  )
}