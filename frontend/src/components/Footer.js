import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { defaultColor } from '../inline-styles'

const Footer = () => {
  return (
    <footer className="fixed-bottom">
      <Container>
        <Row>
          <Col className="text-center text-warning py-3">
            <strong>Copyright &copy; Googne Inc.</strong>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
