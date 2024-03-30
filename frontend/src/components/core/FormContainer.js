import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const FormContainer = ({ size, children }) => {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={size}>{children}</Col>
      </Row>
    </Container>
  )
}

FormContainer.defaultProps = {
  size: 10,
}

export default FormContainer
