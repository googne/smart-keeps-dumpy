import * as yup from 'yup'

// Global Declaration yupDatatype
export const stringRequired = yup.string().required('Required')
export const onlyNumber = yup
  .number()
  .typeError('Allowed number only')
  .integer('Allowed integer number only')
  .positive('Allowed Positive number only')
export const onlyNumberRequired = onlyNumber.required('Required')

// Custom Declaration yupDatatype
export const email = stringRequired.email('Invalid email')
export const password = stringRequired
  .min(3, 'Password is too small')
  .max(8, 'Password is too large')
export const confirmPassword = stringRequired.oneOf(
  [yup.ref('password'), null],
  'Password should be match'
)
export const registeredMobile = onlyNumberRequired
  .moreThan('1000000000', 'Length should be 10 only')
  .lessThan('10000000000', 'Length should be 10 only')

export const upiId = stringRequired.matches(
  /^[a-zA-Z0-9.\-_]{2,256}@[a-zA-Z]{2,64}$/,
  'Invalid UPI ID'
)
