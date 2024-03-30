import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer className="fixed-bottom">
      <Container>
        <Row>
          <Col className="text-center text-primary py-3">
            <strong>Copyright &copy; Googne Inc.</strong>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
