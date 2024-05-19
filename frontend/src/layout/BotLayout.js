import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'

const BotLayout = () => {
  const options = [
    { path: '/bot', name: 'InputFields' },
    { path: '/bot/hook', name: 'ValidationHook' },
    { path: '/bot/rule', name: 'ValidationRule', disabled: true },
  ]

  return (
    <Row>
      <Col md={2}>
        <Sidebar options={options} />
      </Col>
      <Col md={10} className="">
        <Outlet />
      </Col>
    </Row>
  )
}

export default BotLayout
