import * as yup from 'yup'
import {
  stringRequired,
  email,
  password,
  confirmPassword,
} from './ValidationRule'
import { getInputFieldParams } from '../utils/formInputUtils'

export const registerHook = {
  fields: ['name', 'email', 'password', 'confirmPassword'],
  validationSchema: yup.object().shape({
    name: stringRequired,
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
    name: getInputFieldParams('name'),
    email: getInputFieldParams('email', 'Email Address'),
    password: getInputFieldParams('password'),
    confirmPassword: getInputFieldParams('confirmPassword'),
  },
}
