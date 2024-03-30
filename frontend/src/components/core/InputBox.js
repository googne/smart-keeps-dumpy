import React, { useEffect, useState } from 'react'
import { Form, Col } from 'react-bootstrap'
import { AnimatePresence, motion } from 'framer-motion'
import { WARNING_ICON, CHECK_ICON } from '../../constants/iconConstants'

const InputError = ({ message }) => {
  // const [alert, setAlert] = useState('')
  // const [alertIcon, setAlertIcon] = useState('')

  // useEffect(() => {
  //   // console.log(isError)
  //   setAlert(() => {
  //     return !isError ? 'success' : 'danger'
  //   })
  //   setAlertIcon(() => {
  //     return !isError ? CHECK_ICON : WARNING_ICON
  //   })
  // }, [isError])

  // console.log(isError, message)
  // let cls = isInvalid ? 'success' : 'danger'
  // let icon = isInvalid ? CHECK_ICON : WARNING_ICON
  // console.log(cls, icon)

  return (
    <motion.p
      className={`"badge badge-pill badge-round alert-danger text-danger mb-0 px-2 mt-1"`}
      {...framer_error}
    >
      <i
        className={WARNING_ICON}
        style={{
          marginRight: '5px',
        }}
      ></i>
      <span style={{ letterSpacing: '2px', verticalAlign: 'text-bottom' }}>
        {message}
      </span>
    </motion.p>
  )
}

const InputBox = ({
  name,
  type,
  label,
  errors,
  touched,
  handleBlur,
  handleChange,
  setFieldTouched,
}) => {
  return (
    <>
      <Form.Group controlId={name} className="mb-3 mt-0">
        <Form.Label
          className="text-info mb-2 px-1"
          style={{ display: 'block' }}
        >
          <strong>{label} </strong>
          <span style={{ float: 'right' }}>
            {errors[name] && touched[name] ? (
              <InputError message={errors[name]} />
            ) : null}
          </span>
        </Form.Label>
        <Form.Control
          type={type || 'text'}
          name={name}
          placeholder={`Enter ${label}`}
          onBlur={handleBlur}
          onChange={(e) => {
            setFieldTouched(name)
            handleChange(e)
          }}
          isInvalid={errors[name] && touched[name]}
        ></Form.Control>
      </Form.Group>
    </>
  )
}
const framer_error = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
  transition: { duration: 0.2 },
}

export default InputBox
