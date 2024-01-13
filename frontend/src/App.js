import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { Row, Col } from 'react-bootstrap'
import Footer from './components/Footer'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import HomeScreen from './screens/HomeScreen'
import BankScreen from './screens/BankScreen'
import BankDetailScreen from './screens/BankDetailScreen'

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Row className="m-2">
          <Col md={2}>
            <Sidebar />
          </Col>
          <Col>
            <main>
              <Route path="/" component={HomeScreen} exact />
              <Route path="/home" component={HomeScreen} />
              <Route path="/bank" component={BankScreen} />
              <Route path="/bank/:id" component={BankDetailScreen} />
            </main>
          </Col>
        </Row>
        <Footer />
      </Router>
    </>
  )
}

export default App
