import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'

const Item = ({ path, name, disabled }) => {
  const { pathname } = useLocation()
  return (
    <>
      <ListGroup.Item
        as={Link}
        to={path}
        variant="info"
        action
        active={pathname.includes(path)}
        disabled={disabled || false}
      >
        {name}
      </ListGroup.Item>
    </>
  )
}
const Sidebar = () => {
  const options = [
    { path: '/home', name: 'Home' },
    { path: '/bank', name: 'Bank Details' },
    { path: '/gmail', name: 'Gmail Accounts' },
    { path: '/govtids', name: 'Govt. IDs' },
    { path: '/credentials', name: 'Credentials', disabled: true },
  ]
  return (
    <>
      <ListGroup>
        {options.map((option, id) => (
          <Item exact key={id} {...option} />
        ))}
      </ListGroup>
    </>
  )
}

export default Sidebar
