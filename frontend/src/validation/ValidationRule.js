import * as yup from 'yup'

export const name = yup.string().required('required')
export const email = yup.string().required('required').email('invalid email')
export const password = yup
  .string()
  .required('required')
  .min(3, 'Password is too small')
  .max(8, 'Password is too large')
export const confirmPassword = yup
  .string()
  .required('required')
  .oneOf([yup.ref('password'), null], 'Password must match')
