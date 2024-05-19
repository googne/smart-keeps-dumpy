import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'

const ComponentLayout = ({ children }) => {
  return (
    <Row className="justify-content-md-center">
      <Col md={0.5} />
      <Col md={11}>{children}</Col>
      <Col md={0.5} />
    </Row>
  )
}

export default ComponentLayout
