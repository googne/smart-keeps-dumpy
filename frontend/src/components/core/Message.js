import React, { useState } from 'react'
import { Alert } from 'react-bootstrap'

const Message = ({ variant, children }) => {
  const [show, setShow] = useState(true)
  return (
    <Alert
      variant={variant}
      className="py-2 mb-2"
      style={{ fontSize: '11px', letterSpacing: 1, fontWeight: 'bold' }}
      dismissible
    >
      {children}
    </Alert>
  )
}

Message.defaultProps = {
  variant: 'info',
}
export default Message
