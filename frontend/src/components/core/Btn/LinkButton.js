import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'

const LinkButton = (props) => {
  return (
    <>
      <Link to={props.to}>
        <Button {...props} />
      </Link>
    </>
  )
}
LinkButton.defaultProps = {
  to: '/',
}

export default LinkButton
