import React from 'react'

const Switch = ({ param, children }) => {
  return children.find((child) => {
    return child.props.value === param
  })
}

const Case = ({ component }) => {
  return component
}

Switch.Case = Case
export default Switch
