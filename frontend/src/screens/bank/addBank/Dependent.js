import { Field, FieldArray } from 'formik'
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

const Dependent = ({
  parent,
  name: keyName,
  fields,
  inputFields,
  validation,
}) => {
  // Dependent: Show as Tabular Form
  console.log('inputFields', inputFields)
  const { errors, values, initialValues } = validation
  // console.log('values', values)
  // console.log('initialValues', initialValues)
  const [isCurrentItemSaved, setCurrentItemSaved] = useState([false])

  useEffect(() => {
    // console.log(isCurrentItemSaved)
  }, [isCurrentItemSaved])

  const handleArraySave = (idx) => {
    setCurrentItemSaved([
      ...isCurrentItemSaved.slice(0, idx),
      true,
      ...isCurrentItemSaved.slice(idx + 1, isCurrentItemSaved.length),
    ])
  }

  const handleArrayEdit = (idx) => {
    setCurrentItemSaved([
      ...isCurrentItemSaved.slice(0, idx),
      false,
      ...isCurrentItemSaved.slice(idx + 1, isCurrentItemSaved.length),
    ])
  }
  const handleArrayReset = (arrayHelpers, idx, initialValues) => {
    console.log(idx, arrayHelpers, initialValues)
    console.log(idx, arrayHelpers, initialValues)
  }
  const handleArrayRemove = (arrayHelpers, idx) => {
    setCurrentItemSaved([
      ...isCurrentItemSaved.slice(0, idx),
      ...isCurrentItemSaved.slice(idx + 1, isCurrentItemSaved.length),
    ])

    arrayHelpers.remove(idx)
  }
  return (
    <>
      <CardBox variant="info" style={{ height: '49%' }}>
        <FieldArray
          name={`${parent}.${keyName}`}
          render={(arrayHelpers) => {
            const objArray = values[parent][keyName]
            return (
              <>
                <Table
                  striped
                  bordered
                  hover
                  responsive
                  size="sm"
                  className="mt-2 text-center"
                >
                  <thead>
                    <tr className="text-center text-info">
                      <th style={{ width: '3%' }}>#</th>
                      {fields.map((field, idx) => (
                        <th style={{ width: '26%' }} key={`tr${idx}`}>
                          {inputFields[field].label}{' '}
                          {inputFields[field].required && <Required />}
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
                                {!isCurrentItemSaved[arrIdx] ? (
                                  <Field
                                    {...inputFields[field]}
                                    name={`${parent}.${keyName}.${arrIdx}.${field}`}
                                    component={TableInputBox}
                                  />
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
                                onClick={() => handleArraySave(arrIdx)}
                                disabled={isCurrentItemSaved[arrIdx]}
                              />

                              <Button
                                icon={EDIT_ICON}
                                variant="primary"
                                title="Edit"
                                onClick={() => handleArrayEdit(arrIdx)}
                                disabled={!isCurrentItemSaved[arrIdx]}
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
                                disabled={isCurrentItemSaved[arrIdx]}
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
                <Row>
                  <Col md={{ span: 2 }}>
                    <Button
                      variant="outline-danger"
                      icon={SAVE_ICON}
                      label="Save All UPI"
                      className="btn-sm form-control"
                      size="lg"
                      // onClick={addItem(arrayHelpers)}
                      onClick={() =>
                        arrayHelpers.insert(
                          0,
                          initialValues[parent][keyName][0]
                        )
                      }
                    />
                  </Col>
                  <Col md={{ span: 2, offset: 8 }}>
                    <Button
                      variant="outline-warning"
                      icon={ADD_ICON}
                      label="Add More UPI"
                      className="btn-sm form-control"
                      size="lg"
                      onClick={() =>
                        arrayHelpers.push(initialValues[parent][keyName][0])
                      }
                    />
                  </Col>
                </Row>
              </>
            )
          }}
        />
      </CardBox>
    </>
  )
}

export default Dependent
