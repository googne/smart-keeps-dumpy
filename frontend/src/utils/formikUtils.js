import { getIn } from 'formik'

export const containErrors = ({ errors, touched }, attr) => {
  const error = getIn(errors, attr)
  return error ? true : false
}
