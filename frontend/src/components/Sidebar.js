import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'
import { useURLQuery } from '../utils/Url'

const Item = ({ path, name, disabled }) => {
  const { pathname } = useLocation()
  const query = useURLQuery()
  return (
    <>
      <ListGroup.Item
        as={Link}
        to={path}
        variant="info"
        action
        active={pathname.includes(path) || path.includes(query.get('type'))}
        disabled={disabled || false}
      >
        {name}
      </ListGroup.Item>
    </>
  )
}
const Sidebar = ({ options }) => {
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

Sidebar.defaultProps = {
  options: [
    { path: '/home', name: 'Home' },
    { path: '/bank', name: 'Bank Details' },
    { path: '/gmail', name: 'Gmail Accounts' },
    { path: '/govtids', name: 'Govt. IDs' },
    { path: '/credentials', name: 'Credentials', disabled: true },
  ],
}

export default Sidebar
