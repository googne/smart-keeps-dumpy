import React from 'react'

const Divider = ({ direction, variant }) => {
  const cssStyle = {
    border: '1px solid',
    position: 'absolute',
    height: '14%',
  }

  return (
    <>
      {direction === 'vertical' ? (
        <span
          className={`border-${variant || 'default'}`}
          style={cssStyle}
        ></span>
      ) : (
        <hr />
      )}
    </>
  )
}

export default Divider
