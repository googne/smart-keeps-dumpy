import * as yup from 'yup'
import { email, password } from './ValidationRule'
import { email as emailField, password as passwordField } from './InputFields'

export const loginHook = {
  fields: ['email', 'password'],
  validationSchema: yup.object().shape({
    email,
    password,
  }),
  initialValues: {
    email: '',
    password: '',
  },
  inputFields: {
    email: emailField,
    password: passwordField,
  },
}
