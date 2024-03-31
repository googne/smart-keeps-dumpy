import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer className="fixed-bottom">
      <Container>
        <Row>
          <Col className="text-center text-warning py-3">
            <span id="footer">Copyright &copy; Googne Inc.</span>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
