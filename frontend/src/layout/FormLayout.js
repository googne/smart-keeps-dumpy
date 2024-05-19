import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const FormLayout = ({ size, children }) => {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={size}>{children}</Col>
      </Row>
    </Container>
  )
}

FormLayout.defaultProps = {
  size: 10,
}

export default FormLayout
