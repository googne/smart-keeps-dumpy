import { ErrorMessage, Field, FieldArray, insert } from 'formik'
import React, { useEffect, useState } from 'react'
import { Row, Col, Table } from 'react-bootstrap'
import Button from '../../../components/core/Btn/Button'
import {
  ADD_ICON,
  CHECK_ICON,
  EDIT_ICON,
  RESET_ICON,
  SAVE_ICON,
  TRASH_ICON,
} from '../../../constants/iconConstants'
import TableInputBox from '../../../components/core/TableInputBox'
import Required from '../../../components/core/Required'
import CardBox from '../../../components/core/CardBox'
import Divider from '../../../components/core/Divider'
import InputError from '../../../components/core/InputError'
import { clean, insertAt, removeAt } from '../../../utils/arrayUtils'

const Dependent = ({
  parent,
  name: keyName,
  fields,
  inputFields,
  validation,
}) => {
  // Dependent: Show as Tabular Form
  // console.log(validation)
  const { errors, values, initialValues } = validation
  const [arrayErrors, setArrayErrors] = useState({})
  const [arrayElement, setArrayElement] = useState({
    saved: [false],
    disabled: [false],
    disabledGlobal: false,
  })

  useEffect(() => {
    const currentErrors = errors?.[parent]?.[keyName]
    mapArrayDisabled(currentErrors)
    if (currentErrors && currentErrors instanceof Array) {
      mapArrayError(currentErrors)
    } else {
      setArrayErrors({})
    }
  }, [errors])

  const mapArrayError = (currentErrors) => {
    fields.map((field) => {
      if (
        !arrayErrors[field] ||
        currentErrors.length != arrayErrors[field].length
      ) {
        arrayErrors[field] = Array(currentErrors.length).fill(undefined)
      }

      for (let idx = 0; idx < currentErrors.length; idx += 1) {
        arrayErrors[field][idx] =
          currentErrors[idx] && currentErrors[idx][field]
            ? currentErrors[idx][field]
            : null
      }
      arrayErrors[field] = clean(arrayErrors[field])
    })
    setArrayErrors(arrayErrors)
  }

  const mapArrayDisabled = (currentErrors) => {
    if (currentErrors) {
      for (let idx = 0; idx < currentErrors.length; idx += 1) {
        setArrayElement({
          ...arrayElement,
          disabled: insertAt(
            arrayElement.disabled,
            idx,
            currentErrors[idx] ? true : false
          ),
          disabledGlobal: true,
        })
      }
    } else {
      setArrayElement({
        ...arrayElement,
        disabled: Array(arrayElement.disabled.length).fill(false),
        disabledGlobal: false,
      })
    }
  }

  // console.log('errors', errors)

  const handleArraySave = (idx) => {
    setArrayElement({
      ...arrayElement,
      disabled: insertAt(arrayElement.disabled, idx, true),
      saved: insertAt(arrayElement.saved, idx, true),
    })

    const unique = new Set(arrayElement.disabled)
    arrayElement.disabledGlobal = unique.length > 1 || unique[0]
  }

  const handleArrayEdit = (idx) => {
    setArrayElement({
      ...arrayElement,
      disabled: insertAt(arrayElement.disabled, idx, false),
      saved: insertAt(arrayElement.saved, idx, false),
    })
    const unique = new Set(arrayElement.disabled)
    arrayElement.disabledGlobal = unique.length > 1 || unique[0]
  }

  const handleArrayRemove = (arrayHelpers, idx) => {
    arrayHelpers.remove(idx)
    setArrayElement({
      ...arrayElement,
      disabled: clean(insertAt(arrayElement.disabled, idx, null)),
      saved: clean(insertAt(arrayElement.disabled, idx, null)),
    })
    const unique = new Set(arrayElement.disabled)
    arrayElement.disabledGlobal = unique.length > 1 || unique[0]
  }

  const handleAddMoreUPI = (arrayHelpers) => {
    arrayHelpers.push(initialValues[parent][keyName][0])
    setArrayElement({
      ...arrayElement,
      disabled: [...arrayElement.disabled, null],
      saved: [...arrayElement.saved, null],
    })
  }

  return (
    <>
      <CardBox variant="info" style={{ height: '93%' }}>
        <FieldArray
          name={`${parent}.${keyName}`}
          render={(arrayHelpers) => {
            const objArray = values[parent][keyName]
            return (
              <>
                <Row>
                  <Col md={{ span: 2, offset: 8 }}>
                    {/* <Button
                      variant="outline-danger"
                      icon={SAVE_ICON}
                      label="Save All UPI"
                      className="btn-sm form-control"
                      size="lg"
                      disabled={arrayElement.disabledGlobal}
                      onClick={() => saveAllUPI(objArray.length)}
                    /> */}
                  </Col>
                  <Col md={{ span: 2 }}>
                    <Button
                      variant="outline-warning"
                      icon={ADD_ICON}
                      label="Add More UPI"
                      className="btn-sm form-control"
                      size="lg"
                      title="Only 3 UPIs are allowed for one Bank A/C"
                      disabled={objArray.length > 2}
                      onClick={() => handleAddMoreUPI(arrayHelpers)}
                    />
                  </Col>
                </Row>
                <Table
                  striped
                  bordered
                  hover
                  responsive
                  size="sm"
                  className="mt-2 text-center"
                >
                  <thead>
                    <tr className="text-info">
                      <th style={{ width: '3%' }}>#</th>
                      {fields.map((field, idx) => (
                        <th
                          style={{ width: '26%' }}
                          key={`tr${idx}`}
                          className="text-left"
                        >
                          {inputFields[field].label}{' '}
                          {inputFields[field].required && <Required />}
                          <span style={{ float: 'right' }}>
                            {arrayErrors[field] &&
                              arrayErrors[field].length > 0 && (
                                <InputError title={arrayErrors[field]}>
                                  {arrayErrors[field].length == 1
                                    ? arrayErrors[field][0]
                                    : 'Multiple Errors'}
                                </InputError>
                              )}
                          </span>
                        </th>
                      ))}
                      <th style={{ width: '19%' }}>Activity</th>
                    </tr>
                  </thead>
                  <tbody>
                    {objArray && objArray.length > 0
                      ? objArray.map((_, arrIdx) => (
                          <tr key={`tr${arrIdx}`}>
                            <td style={{ verticalAlign: 'middle' }}>
                              {arrIdx + 1}.
                            </td>
                            {fields.map((field, idx) => (
                              <td
                                key={`td${idx}`}
                                style={{ verticalAlign: 'middle' }}
                              >
                                {/* {!isCurrentItemSaved[arrIdx] ? ( */}
                                {!arrayElement.saved[arrIdx] ? (
                                  <>
                                    <Field
                                      {...inputFields[field]}
                                      name={`${parent}.${keyName}.${arrIdx}.${field}`}
                                      component={TableInputBox}
                                    />
                                  </>
                                ) : (
                                  <p
                                    style={{
                                      display: 'inline',
                                      verticalAlign: 'middle',
                                    }}
                                  >
                                    {values[parent][keyName][arrIdx][field]}
                                  </p>
                                )}
                              </td>
                            ))}
                            <td className="text-center">
                              <Button
                                icon={CHECK_ICON}
                                variant="success"
                                title="Save"
                                // label={`${validation.isValid}`}
                                onClick={() => handleArraySave(arrIdx)}
                                disabled={arrayElement.disabled[arrIdx]}
                                // disabled={isCurrentItemSaved[arrIdx]}
                                // disabled={
                                //   isCurrentItemSaved[arrIdx] &&
                                //   errors?.[parent]?.[keyName]?.[arrIdx]
                                //     ?.length > 0
                                // }
                              />

                              <Button
                                icon={EDIT_ICON}
                                variant="primary"
                                title="Edit"
                                onClick={() => handleArrayEdit(arrIdx)}
                                disabled={!arrayElement.saved[arrIdx]}
                                // disabled={!isCurrentItemSaved[arrIdx]}
                              />

                              <Button
                                icon={RESET_ICON}
                                variant="warning"
                                title="Clear"
                                onClick={() =>
                                  arrayHelpers.replace(
                                    arrIdx,
                                    initialValues[parent][keyName][0]
                                  )
                                }
                                disabled={arrayElement.saved[arrIdx]}
                                // disabled={isCurrentItemSaved[arrIdx]}
                              />

                              <Button
                                icon={TRASH_ICON}
                                variant="danger"
                                title="Remove"
                                disabled={objArray.length === 1}
                                onClick={() =>
                                  handleArrayRemove(arrayHelpers, arrIdx)
                                }
                              />
                            </td>
                          </tr>
                        ))
                      : null}
                  </tbody>
                </Table>
              </>
            )
          }}
        />
      </CardBox>
    </>
  )
}

export default Dependent
