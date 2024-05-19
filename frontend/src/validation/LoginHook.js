import * as yup from 'yup'
import { email, password } from './ValidationRule'
import { getInputFieldParams } from '../utils/formInputUtils'

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
    email: getInputFieldParams('email', 'Email Address'),
    password: getInputFieldParams('password'),
  },
}
