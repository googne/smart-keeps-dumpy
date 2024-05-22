import React from 'react'
import { Form } from 'react-bootstrap'
import { getIn } from 'formik'

const TextInput = ({ field, form: { errors, touched }, ...props }) => {
  const { name } = field

  const containErrors = (name) => {
    const error = getIn(errors, name)
    return getIn(touched, name) && error ? error : null
  }

  return (
    <>
      <Form.Control {...field} {...props} isInvalid={containErrors(name)} />
    </>
  )
}

export default TextInput
