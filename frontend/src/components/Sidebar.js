import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useLocation } from 'react-router-dom'

const ListGroupItem = ({ path, name, active }) => {
  return (
    <>
      <LinkContainer to={path}>
        <ListGroup.Item variant="success" action active={active}>
          {/* <i className="fa fa-check-circle text-primary float-left mt-1 mr-1"></i> */}
          {name}
        </ListGroup.Item>
      </LinkContainer>
    </>
  )
}
const Sidebar = () => {
  const { pathname } = useLocation()
  console.log(pathname)
  return (
    <>
      {/* <ListGroup>
        <ListGroup.Item variant="primary">Bank Detail</ListGroup.Item>
        <ListGroup.Item variant="primary">Gmail Account</ListGroup.Item>
        <ListGroup.Item variant="primary">Govt. IDs</ListGroup.Item>
      </ListGroup> */}

      <ListGroup>
        <ListGroupItem
          exact
          path="/home"
          name="Home"
          active={'/' === pathname}
        />
        <ListGroupItem exact path="/bank" name="Bank Detail" />
        <ListGroupItem exact path="/gmail" name="Gmail Account" />
        <ListGroupItem exact path="/govtids" name="Govt. IDs" />
        {/* <LinkContainer to="/">
          <ListGroup.Item variant="success" action>
            <i className="fa fa-check-circle text-primary float-left mt-1 mr-1"></i>
            Home
          </ListGroup.Item>
        </LinkContainer> */}

        {/* <LinkContainer to="/bank">
          <ListGroup.Item variant="success" action>
            <i className="fa fa-check-circle text-primary float-left mt-1 mr-1"></i>
            Bank Detail
          </ListGroup.Item>
        </LinkContainer>
        <ListGroup.Item variant="success" action>
          Gmail Account
        </ListGroup.Item>
        <ListGroup.Item variant="success" action>
          Govt. IDs
        </ListGroup.Item> */}
      </ListGroup>

      {/* <ListGroup>
        <ListGroup.Item variant="danger">Bank Detail</ListGroup.Item>
        <ListGroup.Item variant="danger">Gmail Account</ListGroup.Item>
        <ListGroup.Item variant="danger">Govt. IDs</ListGroup.Item>
      </ListGroup> */}

      {/* <ListGroup>
        <ListGroup.Item variant="warning">Bank Detail</ListGroup.Item>
        <ListGroup.Item variant="warning">Gmail Account</ListGroup.Item>
        <ListGroup.Item variant="warning">Govt. IDs</ListGroup.Item>
      </ListGroup>

      <ListGroup>
        <ListGroup.Item variant="info">Bank Detail</ListGroup.Item>
        <ListGroup.Item variant="info">Gmail Account</ListGroup.Item>
        <ListGroup.Item variant="info">Govt. IDs</ListGroup.Item>
      </ListGroup> */}
    </>
  )
}

export default Sidebar
