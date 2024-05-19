import React from 'react'
import { motion } from 'framer-motion'
import { WARNING_ICON } from '../../constants/iconConstants'

const InputError = (props) => {
  const { children } = props

  return (
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
  )
}

const framer_error = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
  transition: { duration: 0.2 },
}
export default InputError
