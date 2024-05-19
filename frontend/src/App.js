import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Footer from './components/Footer'
import Header from './components/Header'
import SidebarLayout from './layout/SidebarLayout'
import WelcomeScreen from './screens/WelcomeScreen'
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/user/LoginScreen'
import RegisterScreen from './screens/user/RegisterScreen'
import BankScreen from './screens/bank/BankScreen'
import BankDetailScreen from './screens/bank/BankDetailScreen'
import { Col, Container, Row } from 'react-bootstrap'
import BotScreen from './bot/BotScreen'
import BotLayout from './layout/BotLayout'
import BankAddScreen from './screens/bank/addBank/BankAddScreen'

const App = () => {
  return (
    <>
      <Router>
        <Container fluid>
          <Header />
          <Row className="m-1">
            <Col>
              <Routes>
                <Route path="/" element={<WelcomeScreen />} exact />
                <Route path="/bot" element={<BotScreen />} exact />
                <Route path="/login" element={<LoginScreen />} />
                <Route path="/register" element={<RegisterScreen />} />
                <Route element={<SidebarLayout />}>
                  <Route path="/home" element={<HomeScreen />} />
                  {/* <Route path="/bank" element={<AddBankScreen />} /> */}
                  <Route path="/bank/add" element={<BankAddScreen />} />
                  <Route path="/bank/detail" element={<BankDetailScreen />} />
                </Route>
                {/* <Route element={<BotLayout />}>
                <Route path="/bot" element={<BotScreen />} exact />
                <Route path="/bot/:type" element={<BotScreen />} />
                <Route path="/bot/:type" element={<BotScreen />} />
              </Route> */}
              </Routes>
            </Col>
          </Row>
        </Container>
        <Footer />
      </Router>
    </>
  )
}

export default App
