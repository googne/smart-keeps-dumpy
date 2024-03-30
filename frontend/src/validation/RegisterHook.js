import * as yup from 'yup'
import { name, email, password, confirmPassword } from './ValidationRule'
import {
  name as nameField,
  email as emailField,
  password as passwordField,
  confirmPassword as confirmPasswordField,
} from './InputFields'

export const registerHook = {
  fields: ['name', 'email', 'password', 'confirmPassword'],
  validationSchema: yup.object().shape({
    name,
    email,
    password,
    confirmPassword,
  }),
  initialValues: {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  },
  inputFields: {
    name: nameField,
    email: emailField,
    password: passwordField,
    confirmPassword: confirmPasswordField,
  },
}
