import React from 'react'
import TextInput from './TextInput'
import SelectInput from './SelectInput'
import Switch from '../Switch'
import PasswordInput from './PasswordInput'
import { Form } from 'react-bootstrap'
import Required from '../Required'
import { ErrorMessage } from 'formik'
import InputError from '../InputError'
// const Switch = (props) => {
//   const { test, children } = props
//   return children.find((child) => {
//     return child.props.value === test
//   })
// }
// const Case = ({ children, value }) => {
//   return children // I don't want do add container around my cases !
// }

const InputBox = (props) => {
  const {
    label,
    display, // tabular
    field,
    required,
  } = props
  const { name } = field
  const { type } = props

  return (
    <>
      <Form.Group
        controlId={name}
        className={`mt-0 ${display != 'tabular' ? 'mb-3' : 'mb-0'}`}
      >
        {display != 'tabular' && (
          <Form.Label className="text-info mb-1" style={{ display: 'block' }}>
            <strong>
              {label} {required && <Required />}
            </strong>
            <span style={{ float: 'right' }}>
              <ErrorMessage name={name} component={InputError} />
            </span>
          </Form.Label>
        )}

        <Switch param={type}>
          <Switch.Case value="select" component={<SelectInput {...props} />} />
          <Switch.Case
            value="password"
            component={<PasswordInput {...props} />}
          />
          <Switch.Case value="text" component={<TextInput {...props} />} />
        </Switch>
      </Form.Group>
    </>
  )
}

export default InputBox
