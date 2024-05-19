import React from 'react'
import { Form } from 'react-bootstrap'
import InputError from './InputError'
import { ErrorMessage, getIn } from 'formik'

const TableInputBox = ({ label, field, form, ...props }) => {
  //{ label, field, form, ...props }
  // console.log(props)

  const { name } = field
  const { errors, touched } = form
  const containErrors = (name) => {
    const error = getIn(errors, name)
    return getIn(touched, name) && error ? error : null
  }
  return (
    <>
      <Form.Group controlId={name} className="mt-0 mb-0">
        {/* <Form.Label className="text-info mb-1" style={{ display: 'block' }}>
          <strong>{label} </strong>
          <span style={{ float: 'right' }}>
            <ErrorMessage name={name} component={InputError} />
          </span>
        </Form.Label> */}
        <Form.Control
          {...field}
          {...props}
          isInvalid={containErrors(name)}
        ></Form.Control>
      </Form.Group>
    </>
  )
}

export default TableInputBox