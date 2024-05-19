import React from 'react'
import { Form } from 'react-bootstrap'
import InputError from './InputError'

const InputBox = ({
  name,
  type,
  label,
  values,
  errors,
  touched,
  handleBlur,
  handleChange,
  setFieldTouched,
}) => {
  return (
    <>
      <Form.Group controlId={name} className="mb-3 mt-0">
        <Form.Label className="text-info mb-1" style={{ display: 'block' }}>
          <strong>{label} </strong>
          <span style={{ float: 'right' }}>
            {/* {errors[name] && touched[name] ? (
              <InputError message={errors[name]} />
            ) : null} */}
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
          value={values[name]}
          isInvalid={errors[name] && touched[name]}
        ></Form.Control>
      </Form.Group>
    </>
  )
}

export default InputBox
