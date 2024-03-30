import React from 'react'
import { Button } from 'react-bootstrap'
import Loader from '../Loader'

const SubmitButton = ({
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
    <Button
      type="submit"
      {...btnProps}
      disabled={disabled === 0}
      className={`${className} mr-2`}
    >
      {loader && <Loader size="sm" />}
      {!iconRight && <i className={`${icon} mr-1`} />}
      {label}
      {iconRight && <i className={`${icon} ml-1`} />}
    </Button>
  )
}

export default SubmitButton
