import React from 'react'
import { Form } from 'react-bootstrap'
import { getIn } from 'formik'

const SelectInput = (props) => {
  const {
    label,
    field,
    form: { errors, touched },
    options,
  } = props
  const { name } = field

  const containErrors = (name) => {
    const error = getIn(errors, name)
    return getIn(touched, name) && error ? error : null
  }

  return (
    <>
      <Form.Control
        as="select"
        {...field}
        {...props}
        isInvalid={containErrors(name)}
      >
        <option value=""> -- {label} -- </option>
        {options.map((option, i) => (
          <option key={i} value={option}>
            {option}
          </option>
        ))}
      </Form.Control>
    </>
  )
}

export default SelectInput
