import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'

const SidebarLayout = () => {
  return (
    <Row>
      <Col md={2}>
        <Sidebar />
      </Col>
      <Col md={10}>
        <Outlet />
      </Col>
    </Row>
  )
}

export default SidebarLayout
