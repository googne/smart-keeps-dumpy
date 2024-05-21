import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { WARNING_ICON } from '../../constants/iconConstants'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'

const InputError = (props) => {
  const { title, children } = props

  const [multipleTitle, setMultipleTitle] = useState(title)

  useEffect(() => {
    // console.log(title)
    if (title && title instanceof Array) {
      const unique = new Set(title)
      setMultipleTitle([...unique].join(', '))
    }
  }, [title])

  return (
    <OverlayTrigger
      placement="top"
      overlay={<Tooltip id={`tooltip-1`}>{multipleTitle}</Tooltip>}
    >
      <motion.p
        className={`"badge badge-pill badge-round alert-danger text-danger mb-0 px-2"`}
        style={{ fontSize: '12px', marginTop: '2px' }}
        {...framer_error}
      >
        <i
          className={WARNING_ICON}
          style={{
            marginRight: '5px',
          }}
        ></i>
        <span style={{ letterSpacing: '2px' }}>{children}</span>
      </motion.p>
    </OverlayTrigger>
  )
}

const framer_error = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
  transition: { duration: 0.2 },
}
export default InputError
