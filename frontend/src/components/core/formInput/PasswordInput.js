import React, { useState } from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap'
import { getIn } from 'formik'
import { EYE_ICON_CLOSE, EYE_ICON_OPEN } from '../../../constants/iconConstants'

const PasswordInput = (props) => {
  const {
    field,
    form: { errors, touched },
  } = props

  const [show, setShow] = useState(false)
  const { name } = field

  const containErrors = (name) => {
    const error = getIn(errors, name)
    return getIn(touched, name) && error ? error : null
  }

  const showPassword = () => {
    setShow(!show)
  }

  return (
    <>
      <InputGroup>
        <Form.Control
          {...field}
          {...props}
          isInvalid={containErrors(name)}
          type={show ? 'text' : props.type}
        />

        <InputGroup.Append>
          <Button
            variant="outline-light"
            className={`text-${show ? 'danger' : 'success'}`}
            style={{ borderColor: '#ced4da' }}
            onClick={() => showPassword()}
            title={`${show ? 'Hide' : 'Show'} Password`}
          >
            {}
            <i className={show ? EYE_ICON_OPEN : EYE_ICON_CLOSE} />
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </>
  )
}

export default PasswordInput
