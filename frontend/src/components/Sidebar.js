import React from 'react'
import { Badge, ListGroup } from 'react-bootstrap'

const Sidebar = () => {
  return (
    <>
      {/* <ListGroup>
        <ListGroup.Item variant="primary">Bank Detail</ListGroup.Item>
        <ListGroup.Item variant="primary">Gmail Account</ListGroup.Item>
        <ListGroup.Item variant="primary">Govt. IDs</ListGroup.Item>
      </ListGroup> */}

      <ListGroup>
        <ListGroup.Item variant="success" action active>
          <i className="fa fa-check-circle text-primary float-left mt-1 mr-1"></i>
          Bank Detail
        </ListGroup.Item>
        <ListGroup.Item variant="success" action>
          Gmail Account
        </ListGroup.Item>
        <ListGroup.Item variant="success" action>
          Govt. IDs
        </ListGroup.Item>
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
