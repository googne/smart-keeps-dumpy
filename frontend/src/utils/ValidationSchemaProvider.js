// import { Field, getIn } from 'formik'
// import { createContext, useContext, useState } from 'react'

// export const ValidationSchemaProvider = ({ fieldSchema, children }) => {
//   return <Context.Provider value={{ fieldSchema }}>{children}</Context.Provider>
// }

// const Context = createContext({ fieldSchema: undefined })

// export const useValidationSchemaContext = () => {
//   const { fieldSchema } = useContext(Context)

//   const isRequired = (name) => {
//     const fieldValidationSchema = fieldSchema ? getIn(fieldSchema, name) : false
//     // console.log(name, fieldValidationSchema)
//     const required = fieldValidationSchema
//       ? !fieldValidationSchema.optional
//       : false

//     return required
//   }

//   return {
//     isRequired,
//   }
// }

// export const getFieldSchema = (fieldSchema) => {
//   const fields = fieldSchema.describe().fields
//   Object.entries(fields).forEach(([field, { fields: childFields }]) => {
//     fields[field] = { ...childFields }
//   })
//   return fields
// }

export const mapRequiredFields = (schema, inputFields) => {
  const parentFields = schema.describe().fields
  // console.log(parentFields)
  Object.entries(parentFields).forEach(
    ([parentField, { fields: childFields }]) => {
      Object.entries(childFields).forEach(([childField, childFieldObj]) => {
        if (childField === 'bankUPIs') {
          Object.entries(childFieldObj.innerType.fields).forEach(
            ([subChildField, { optional }]) => {
              inputFields[parentField].dependent.inputFields[subChildField] = {
                ...inputFields[parentField].dependent.inputFields[
                  subChildField
                ],
                required: !optional,
              }
            }
          )
        } else {
          inputFields[parentField].inputFields[childField] = {
            ...inputFields[parentField].inputFields[childField],
            required: !childFieldObj.optional,
          }
        }
      })
    }
  )
}
