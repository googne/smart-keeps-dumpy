import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
} from 'react-router-dom'

import { Row, Col } from 'react-bootstrap'
import Footer from './components/Footer'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
// import HomeScreen from './screens/HomeScreen'
// import BankScreen from './screens/BankScreen'
// import BankDetailScreen from './screens/BankDetailScreen'
// import SidebarLayout from './layout/SidebarLayout'
import WelcomeScreen from './screens/WelcomeScreen'
import DefaultLayout from './layout/DefaultLayout'

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <main className="py-3">
          <Routes>
            <Route path="/" element={<WelcomeScreen />} exact />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/register" element={<RegisterScreen />} />

            {/* <Route element={<DefaultLayout />}>
              <Route path="/" element={<WelcomeScreen />} exact />
              <Route path="/login" element={<LoginScreen />} />
              <Route path="/register" element={<RegisterScreen />} />
            </Route> */}
            {/* <Route element={<SidebarLayout />}>
              <Route path="/home" element={<HomeScreen />} />
              <Route
                path="/bank"
                render={({ match: { url } }) => (
                  <>
                    <Route path={`${url}/`} element={<BankScreen />} exact />
                    <Route path={`${url}/add`} element={<BankDetailScreen />} />
                  </>
                )}
              />
            </Route> */}
          </Routes>
        </main>
        {/* <Route element={<SidebarLayout />}>
              <Route path="/" element={HomeScreen} exact />
              <Route path="/home" element={HomeScreen} />
              <Route
                path="/bank"
                render={({ match: { url } }) => (
                  <>
                    <Route path={`${url}/`} element={BankScreen} exact />
                    <Route path={`${url}/add`} element={BankDetailScreen} />
                  </>
                )}
              />
            </Route> */}
        {/* <Row className="m-2">
          <Col md={2}>
            <Sidebar />
          </Col>
          <Col>
            <main>
              <Switch>
                <Route path="/" element={HomeScreen} exact />
                <Route path="/home" element={HomeScreen} />
                <Route
                  path="/bank"
                  render={({ match: { url } }) => (
                    <>
                      <Route path={`${url}/`} element={BankScreen} exact />
                      <Route path={`${url}/add`} element={BankDetailScreen} />
                    </>
                  )}
                />
              </Switch>
            </main>
          </Col>
        </Row> */}
        <Footer />
      </Router>
    </>
  )
}

export default App
