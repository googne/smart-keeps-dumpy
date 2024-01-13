import React from 'react'
import { Container, Navbar, Row, Col } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Header = () => {
  return (
    <header>
      {/* <Navbar bg="primary" expand="lg" className="navbar-dark">
        <Container>
          <Navbar.Brand href="#home" className="text-center">
            Dumpy (Smart Keeps)
          </Navbar.Brand>
        </Container>
      </Navbar> */}

      <Navbar bg="success" expand="lg" className="navbar-dark px-5">
        <LinkContainer to="/">
          <Navbar.Brand href="/">Dumpy (Smart Keeps)</Navbar.Brand>
        </LinkContainer>
      </Navbar>

      {/* <Navbar bg="danger" expand="lg" className="navbar-dark">
        <Container>
          <Navbar.Brand href="#home" className="text-center">
            Dumpy (Smart Keeps)
          </Navbar.Brand>
        </Container>
      </Navbar>

      <Navbar bg="warning" expand="lg" className="navbar-dark">
        <Container>
          <Navbar.Brand href="#home" className="text-center">
            Dumpy (Smart Keeps)
          </Navbar.Brand>
        </Container>
      </Navbar>

      <Navbar bg="info" expand="lg" className="navbar-dark">
        <Container>
          <Navbar.Brand href="#home" className="text-center">
            Dumpy (Smart Keeps)
          </Navbar.Brand>
        </Container>
      </Navbar> */}
    </header>
  )
}

export default Header
