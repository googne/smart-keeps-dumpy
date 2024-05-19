import React from 'react'
import { OverlayTrigger, Button as ReactButton, Tooltip } from 'react-bootstrap'
import Loader from '../Loader'

const RefBtn = ({
  type,
  className,
  label,
  icon,
  loader,
  iconRight,
  ...props
}) => {
  return (
    <ReactButton
      {...props}
      type={type || 'button'}
      className={`${className} mr-2`}
    >
      {label ? (
        <>
          {loader && <Loader size="sm" />}
          {!iconRight && <i className={`${icon} mr-1`} />}
          {label}
          {iconRight && <i className={`${icon} ml-1`} />}
        </>
      ) : (
        <>{icon && <i className={icon}></i>}</>
      )}
    </ReactButton>
  )
}
const Button = ({ title, ...props }) => {
  return (
    <>
      {!props.disabled && title ? (
        <>
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip id={`tooltip-${props.variant}`}>{title}</Tooltip>}
          >
            <RefBtn {...props} />
          </OverlayTrigger>
        </>
      ) : (
        <RefBtn {...props} />
      )}
    </>
  )
}

export default Button
