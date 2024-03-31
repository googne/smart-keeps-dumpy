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
import BankAddScreen from './screens/bank/BankAddScreen'
import BankDetailScreen from './screens/bank/BankDetailScreen'

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <main className="p-3">
          <Routes>
            <Route path="/" element={<WelcomeScreen />} exact />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/register" element={<RegisterScreen />} />
            <Route element={<SidebarLayout />}>
              <Route path="/home" element={<HomeScreen />} />
              <Route path="/bank" element={<BankScreen />} />
              <Route path="/bank/add" element={<BankAddScreen />} />
              <Route path="/bank/detail" element={<BankDetailScreen />} />

              {/* <Route
                path="/bank"
                render={({ match: { url } }) => (
                  <>
                    <Route path={`${url}/`} element={<BankScreen />} exact />
                    <Route path={`${url}/add`} element={<BankAddScreen />} />
                    <Route
                      path={`${url}/detail`}
                      element={<BankDetailScreen />}
                    />
                  </>
                )}
              /> */}
            </Route>
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  )
}

export default App
