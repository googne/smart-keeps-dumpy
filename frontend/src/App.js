import React from 'react'
import { Container, ListGroup, Row, Col } from 'react-bootstrap'
import Footer from './components/Footer'
import Header from './components/Header'
import Sidebar from './components/Sidebar'

const App = () => {
  return (
    <>
      <Header />
      <Row className="m-2">
        <Col md={2}>
          <Sidebar />
        </Col>
        <Col>
          <main>
            <h1>Welcome to Dumpy</h1>
          </main>
        </Col>
      </Row>
      <Footer />
    </>
  )
}

export default App
