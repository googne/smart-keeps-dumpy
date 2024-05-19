import React from 'react'
import { Form } from 'react-bootstrap'
import InputError from './InputError'
import { ErrorMessage, getIn } from 'formik'
import Required from './Required'

const ArrayInputBox = ({ label, field, form, required, ...props }) => {
  const { name } = field
  const { errors, touched } = form
  // console.log(name, required)

  const containErrors = (name) => {
    const error = getIn(errors, name)
    return getIn(touched, name) && error ? error : null
  }
  return (
    <>
      <Form.Group controlId={name} className="mb-3 mt-0">
        <Form.Label className="text-info mb-1" style={{ display: 'block' }}>
          <strong>
            {label} {required && <Required />}
          </strong>
          <span style={{ float: 'right' }}>
            <ErrorMessage name={name} component={InputError} />
          </span>
        </Form.Label>
        <Form.Control
          {...field}
          {...props}
          isInvalid={containErrors(name)}
        ></Form.Control>
      </Form.Group>
    </>
  )
}

export default ArrayInputBox
