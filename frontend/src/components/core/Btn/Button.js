import React from 'react'
import { Button as ReactButton } from 'react-bootstrap'
import Loader from '../Loader'

const Button = ({
  type,
  className,
  label,
  icon,
  variant,
  onClick,
  disabled,
  loader,
  iconRight,
}) => {
  const btnProps = { className: className, variant, onClick }
  return (
    <ReactButton
      type={type || 'button'}
      {...btnProps}
      disabled={disabled === 0}
      className={`${className} mr-2`}
    >
      {loader && <Loader size="sm" />}
      {!iconRight && <i className={`${icon} mr-1`} />}
      {label}
      {iconRight && <i className={`${icon} ml-1`} />}
    </ReactButton>
  )
}

export default Button
