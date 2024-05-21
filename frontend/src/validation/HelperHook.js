import { mapRequiredFields } from '../utils/ValidationSchemaProvider'
import { registerHook as register } from './RegisterHook'
import { loginHook as login } from './LoginHook'
import { addBankHook as addBank } from './AddBankHook'

const mapRequired = (schema) => {
  mapRequiredFields(
    schema.validationSchema,
    schema.inputFields || schema.tabContent
  )
  return {
    ...schema,
  }
}

export const loginHook = mapRequired(login)
export const registerHook = mapRequired(register)
export const addBankHook = mapRequired(addBank)
