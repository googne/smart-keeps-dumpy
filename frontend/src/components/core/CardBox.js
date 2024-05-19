import React from 'react'
import { Card } from 'react-bootstrap'

const CardBox = ({ variant, header, style, children }) => {
  return (
    <>
      <Card
        className={`border-${variant || 'success'} text-left mt-3 p-2`}
        style={{
          ...style,
          borderWidth: '1.5px',
        }}
      >
        <span className={`border-text ml-5 text-${variant || 'success'}`}>
          {header || 'UPI Detail'}
        </span>
        <Card.Body
          className="py-2 px-4"
          style={{ height: '500px', overflowY: 'auto' }}
        >
          {children}
        </Card.Body>
      </Card>
    </>
  )
}

export default CardBox
