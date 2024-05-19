import React from 'react'
import { STAR_ICON } from '../../constants/iconConstants'

const Required = () => {
  const cssStyle = {
    fontSize: '9px',
    position: 'relative',
    top: '-5px',
  }
  return (
    <i
      className={`${STAR_ICON} text-danger`}
      style={cssStyle}
      title="required"
    ></i>
  )
}

export default Required
