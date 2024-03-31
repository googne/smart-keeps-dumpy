import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../actions/userActions'
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
    navigate('/')
  }

  return (
    <header>
      <Navbar expand="md" className="navbar-dark px-5 py-0 custom-navbar">
        <Navbar.Brand as={Link} to={userInfo ? '/home' : '/'} className="py-2">
          <span className="logo">D</span>
          <span className="logo-name" title="Smart Keeps">
            Dumpy
          </span>
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Nav className="ml-auto">
            {userInfo ? (
              <NavDropdown
                title={
                  <>
                    <i className="fas fa-user-circle fa-2x pr-1"></i>
                    <span style={{ verticalAlign: 6 }}>{userInfo.name}</span>
                  </>
                }
                id="username"
              >
                <NavDropdown.Item as={Link} to="/profile">
                  <i className="fa fa-user-circle mr-1"></i>
                  My Profile
                </NavDropdown.Item>
                {userInfo.isAdmin && (
                  <>
                    <NavDropdown.Divider />
                    <NavDropdown.Item as={Link} to="/admin/userlist">
                      <i className="fa fa-users mr-1"></i>
                      Users
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/admin/productlist">
                      <i className="fa fa-database mr-1"></i>
                      Products
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/admin/orderlist">
                      <i className="fa fa-th-list mr-1"></i>
                      Orders
                    </NavDropdown.Item>
                  </>
                )}
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={logoutHandler}>
                  <i className="fa fa-sign-out-alt mr-1"></i>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Nav.Link as={Link} to="/login" id="username">
                <i className="fas fa-user-circle fa-2x pr-1"></i>
                <span style={{ verticalAlign: 5 }}>Sign In</span>
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  )
}

export default Header
