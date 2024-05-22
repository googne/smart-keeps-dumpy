import React, { useEffect, useState } from 'react'
import {
  Badge,
  Card,
  Col,
  Container,
  Form,
  Row,
  Button as ReactButton,
} from 'react-bootstrap'
import Sidebar from '../components/Sidebar'
import { useURLQuery } from '../utils/Url'
import { ADD_ICON, CANCEL_ICON, TRASH_ICON } from '../constants/iconConstants'
import SubmitButton from '../components/core/Btn/SubmitButton'
import LinkButton from '../components/core/Btn/LinkButton'
import Button from '../components/core/Btn/Button'

const BotScreen = () => {
  const optionType = useURLQuery().get('type')

  const name = {
    field: 'InputFields',
    hook: 'ValidationHook',
    rule: 'ValidationRule',
  }
  const options = [
    { path: '/bot?type=field', name: 'InputFields' },
    { path: '/bot?type=hook', name: 'ValidationHook' },
    { path: '/bot?type=rule', name: 'ValidationRule', disabled: true },
  ]

  return (
    <>
      <Row>
        <Col md={3}>
          <Sidebar options={options} />
        </Col>
        <Col>
          <h1>Bot Screen: {name[optionType]}</h1>
          {/* {optionType === 'field' && <InputBoxFields />}
          {optionType === 'hook' && <ValidationHook />} */}
        </Col>
      </Row>
    </>
  )
}

const InputFields = () => {
  const [fieldName, setFieldName] = useState('')
  const [fieldLabel, setFieldLabel] = useState('')
  const [inputType, setInputType] = useState('text')
  const [jsonData, setJsonData] = useState('')
  const [result, setResult] = useState('')

  const inputTypes = ['email', 'number', 'password', 'text']

  useEffect(() => {
    let found = false
    inputTypes.map((option, id) => {
      if (fieldName.toLowerCase().includes(option)) {
        setInputType(option)
        found = true
        return
      }
    })
    if (!found) {
      setInputType('text')
    }
    let fieldLabel =
      fieldName.slice(0, 1).toUpperCase() + fieldName.slice(1, fieldName.length)
    fieldLabel = fieldLabel.replace(/([A-Z])/g, ' $1').trim()
    setFieldLabel(fieldLabel)
    setJsonData({
      name: fieldName,
      label: fieldLabel,
      type: inputType,
      placeholder: `Enter ${fieldLabel} ...`,
    })

    setResult(
      `export const ${fieldName} = ${JSON.stringify(jsonData, undefined, 3)}`
    )
  }, [fieldName, setJsonData])

  const handleInputType = (e) => {
    e.preventDefault()
    setJsonData({
      name: fieldName,
      label: fieldLabel,
      type: e.target.value,
      placeholder: `Enter ${fieldLabel} ...`,
    })
    setInputType(e.target.value)
    setResult(
      `export const ${fieldName} = ${JSON.stringify(jsonData, undefined, 3)}`
    )
  }

  const handleFieldLabel = (e) => {
    e.preventDefault()
    setJsonData({
      name: fieldName,
      label: e.target.value,
      type: inputType,
      placeholder: `Enter ${e.target.value} ...`,
    })
    setFieldLabel(e.target.value)
    setResult(
      `export const ${fieldName} = ${JSON.stringify(jsonData, undefined, 3)}`
    )
  }
  return (
    <Row>
      <Col>
        <Form>
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Input Type</Form.Label>
            <Form.Control
              as="select"
              value={inputType}
              onChange={handleInputType}
            >
              {inputTypes.map((option, id) => (
                <option key={id} value={option}>
                  {option.slice(0, 1).toUpperCase() +
                    option.slice(1, option.length)}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col} controlId="fieldName">
            <Form.Label>Field Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Field Name"
              value={fieldName}
              onChange={(e) => setFieldName(e.target.value)}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="fieldLabel">
            <Form.Label>Field Label</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Field Label"
              value={fieldLabel}
              onChange={handleFieldLabel}
            />
          </Form.Group>
        </Form>
      </Col>
      <Col>
        <Form.Control
          as="textarea"
          rows={10}
          className="text-danger"
          value={result}
          onChange={(e) => setResult(e.target.value)}
        />
      </Col>
    </Row>
  )
}

const ValidationHook = () => {
  const [fieldList, setFieldList] = useState([])
  const [fieldName, setFieldName] = useState('')
  const [jsonData, setJsonData] = useState('')

  const getDict = (val) => {
    let dict = {}
    fieldList.forEach((field, index) => (dict[field] = val))
    return dict
  }
  useEffect(() => {
    let dynamic = {}
    fieldList.forEach(
      (field, index) => (dynamic[field] = `getInputFieldParams('${field}')`)
    )

    setJsonData({
      fields: [...fieldList],
      validationSchema: getDict('stringRequired'),
      initialValues: getDict(''),
      inputFields: dynamic,
    })
  }, [fieldList, setJsonData])

  const addField = (e) => {
    e.preventDefault()
    setFieldName('')
    setFieldList([...fieldList, fieldName])
  }
  const deleteAll = (e) => {
    e.preventDefault()
    setFieldList([])
  }

  const removeField = (idx) => {
    setFieldList((prev) => prev.filter((el, i) => i !== idx))
  }

  return (
    <Row>
      <Col>
        <Form>
          <Form.Group as={Col} controlId="fieldName">
            <Form.Label>Field Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Field Name"
              value={fieldName}
              onChange={(e) => setFieldName(e.target.value)}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="actionBtn">
            <Button
              variant="info"
              icon={ADD_ICON}
              label="Add Field"
              className="btn-sm form-control"
              onClick={addField}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="fieldList">
            <Card
              className="border-info p-2"
              style={{ height: '100px', overflowY: 'auto' }}
            >
              <div>
                {fieldList.map((field, idx) => (
                  <Badge
                    key={`field${idx}`}
                    variant="danger"
                    className="m-1"
                    style={{
                      letterSpacing: '2px',
                      fontSize: '12px',
                      borderRadius: '5px',
                    }}
                  >
                    {field}{' '}
                    <ReactButton
                      key={`btn${idx}`}
                      variant="outline-white"
                      className="btn-sm p-0"
                      onClick={() => removeField(idx)}
                    >
                      <i className={CANCEL_ICON}></i>
                    </ReactButton>
                  </Badge>
                ))}
              </div>
            </Card>
          </Form.Group>
          <Form.Group as={Col} controlId="actionBtn">
            <Button
              variant="success"
              icon={TRASH_ICON}
              label="Delete All"
              className="btn-sm form-control"
              onClick={deleteAll}
            />
          </Form.Group>
        </Form>
      </Col>
      <Col>
        <Form.Control
          as="textarea"
          rows={10}
          className="text-danger"
          value={JSON.stringify(jsonData, undefined, 2)}
          onChange={(e) => setJsonData(e.target.value)}
        />
      </Col>
    </Row>
  )
}

export default BotScreen
