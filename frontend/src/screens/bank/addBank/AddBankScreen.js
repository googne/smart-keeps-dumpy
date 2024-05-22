import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Card, Col, Row, Tab, Tabs } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../../../components/core/Message'
import {
  ADD_ICON,
  CANCEL_ICON,
  NEXT_ICON,
  PREVIOUS_ICON,
  RESET_ICON,
} from '../../../constants/iconConstants'
import { defaultColor } from '../../../inline-styles'
import SubmitButton from '../../../components/core/Btn/SubmitButton'
import { Formik, Form, Field } from 'formik'
import Button from '../../../components/core/Btn/Button'
import ComponentLayout from '../../../layout/ComponentLayout'
import { addBankHook } from '../../../validation/HelperHook'
import { extractDigit } from '../../../utils/stringUtils'
import InputBox from '../../../components/core/formInput/InputBox'
import { containErrors } from '../../../utils/formikUtils'
import TabularForm from '../../../components/TabularForm'
import Dependent from './Dependent'

const AddBankScreen = () => {
  const [activeTab, setActiveTab] = useState('tab0')
  const [prevBtnDisable, setPrevBtnDisable] = useState(true)
  const [nextBtnDisable, setNextBtnDisable] = useState(false)
  const { tabNames, tabParams, tabContent, initialValues, validationSchema } =
    addBankHook

  // console.log(addBankHook)
  const [apiValues, setApiValues] = useState(initialValues)
  let intialFormData = { validated: false }
  tabNames.map((tabName, _) => {
    intialFormData = {
      ...intialFormData,
      [tabName]: {
        values: {},
        validated: false,
      },
    }
  })
  const [formData, setFormData] = useState(intialFormData)
  // console.log(formData)
  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error: userLoginError, userInfo } = userLogin

  const redirect = location.search ? location.search.split('=')[1] : '/'

  useEffect(() => {
    setApiValues({
      ...initialValues['bankDetails'],
      cards: [initialValues.cards],
      credentials: [initialValues.credentials],
    })
  }, [])

  useEffect(() => {
    const tabIdx = extractDigit(activeTab)
    setPrevBtnDisable(getValidTab(tabIdx, -1) < 0)
    // setNextBtnDisable(getValidTab(tabIdx, 1) >= tabNames.length)
  }, [activeTab])

  const handleTabChange = (tabId) => {
    setActiveTab(tabId)
  }

  const getValidTab = (tabIdx, type) => {
    let nextTab = tabIdx + type
    if (nextTab <= 0 || nextTab >= tabNames.length) return nextTab
    while (tabParams[tabNames[nextTab]].disabled || false) {
      nextTab = nextTab + type
      if (nextTab <= 0 || nextTab >= tabNames.length) return nextTab
    }
    return nextTab
  }

  const watchForm = () => {}
  const handleSave = (validation, keyName) => {
    const { initialValues, values } = validation
    if (!containErrors(validation, keyName)) {
      const oldData = apiValues?.keyName ? apiValues.keyName : []
      setApiValues({
        ...apiValues,
        [keyName]: [...oldData, values[keyName]],
      })
      // values[keyName] = initialValues[keyName]
    }
  }

  const handlePreviousTab = () => {
    const tabIdx = extractDigit(activeTab)
    setActiveTab(`tab${getValidTab(tabIdx, -1)}`)
  }

  const handleSaveNextTab = (validation) => {
    const tabIdx = extractDigit(activeTab)
    const keyName = tabNames[tabIdx]
    if (!containErrors(validation, keyName)) {
      handleSave(validation, keyName)
      const nextTab = getValidTab(tabIdx, 1)
      // tabParams[keyName[`tab${nextTab}`]].disabled = true
      setActiveTab(`tab${nextTab}`)
    }

    // const tabIdx = extractDigit(activeTab)
    // setActiveTab(`tab${getValidTab(tabIdx, 1)}`)
  }

  const handleSubmit = (values, { resetForm }) => {
    setApiValues({
      ...apiValues,
      cardDetail: [apiValues.cardDetail],
    })
    console.log(JSON.stringify(apiValues, null, 2))
    // dispatch(register(name, email, password))
    resetForm()
  }
  const [showUpi, setShowUpi] = useState(false)
  const [bankUPIButton, setBankUPIButton] = useState({
    variant: 'outline-warning',
    icon: ADD_ICON,
    label: 'Add UPI',
  })

  const handleBankUPI = (values) => {
    if (showUpi) {
      setBankUPIButton({
        variant: 'outline-warning',
        icon: ADD_ICON,
        label: 'Add UPI',
      })
      setShowUpi(false)
      values.bankDetail.bankUPIs = []
    } else {
      setBankUPIButton({
        variant: 'outline-danger',
        icon: CANCEL_ICON,
        label: 'Remove UPI',
      })
      setShowUpi(true)
      values.bankDetail.bankUPIs = [initialValues.bankDetail.bankUPIs[0]]
    }
  }

  return (
    <ComponentLayout>
      <Formik
        validateOnMount={true}
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {(validation) => (
          <>
            <Form>
              <Card
                className="border-info text-left"
                style={{ borderWidth: '1.5px', height: '800px' }}
              >
                <Card.Header
                  style={{
                    backgroundColor: defaultColor.light,
                    fontWeight: 'bolder',
                    fontSize: 20,
                    color: defaultColor.dark,
                  }}
                >
                  Add New Bank
                </Card.Header>
                <Card.Body className="border-0 p-0 m-0">
                  {userLoginError && (
                    <Message variant="danger">{userLoginError}</Message>
                  )}
                  <Card className="border-0 p-0 m-0">
                    <Card.Body className="pb-0">
                      <Tabs
                        // activeKey={activeTab}
                        id="add-bank"
                        className="mb-0 border-info"
                        justify
                        // onSelect={handleTabChange}
                        activeKey={activeTab}
                        onSelect={(k) => setActiveTab(k)}
                      >
                        {tabNames.map((tabName, idx) => (
                          <Tab
                            key={idx}
                            eventKey={`tab${idx}`}
                            className="border border-info p-2"
                            style={{ margin: '0 -10px' }}
                            disabled={tabParams[tabName].disabled}
                            // {...tabParams[tabName]}
                            title={
                              <span>
                                {tabParams[tabName].title}
                                {/* {containErrors(validation, tabName) && (
                                  <i
                                    className={`${WARNING_ICON} text-danger float-right mt-2`}
                                  />
                                )} */}
                              </span>
                            }
                            // title={`Bank Detail ${(
                            //   <i className={WARNING_ICON} />
                            // )}`}
                          >
                            <Card
                              className="border-0 text-left "
                              style={{
                                borderWidth: '1.5px',
                              }}
                            >
                              <Card.Body
                                className="py-2 px-4"
                                style={{ height: '525px', overflowY: 'hidden' }}
                              >
                                <Row>
                                  {tabContent[tabName].fields &&
                                    tabContent[tabName].fields.map(
                                      (field, index) => (
                                        <Col key={index} md={4}>
                                          <Field
                                            {...tabContent[tabName].inputFields[
                                              field
                                            ]}
                                            name={`${tabName}.${field}`}
                                            component={InputBox}
                                          />
                                        </Col>
                                      )
                                    )}
                                  {tabContent[tabName].dependent && (
                                    <Col md={4}>
                                      <Button
                                        {...bankUPIButton}
                                        className="btn-sm form-control"
                                        size="lg"
                                        style={{ marginTop: '28px' }}
                                        onClick={() =>
                                          handleBankUPI(validation.values)
                                        }
                                      />
                                    </Col>
                                  )}
                                  {tabContent[tabName].tabularForm && (
                                    <Col md={4}>
                                      <Button
                                        variant="outline-warning"
                                        icon={ADD_ICON}
                                        label="Save"
                                        className="btn-sm form-control"
                                        size="lg"
                                        style={{ marginTop: '28px' }}
                                        // onClick={() =>
                                        //   handleSave(validation, tabName)
                                        // }
                                      />
                                    </Col>
                                  )}
                                </Row>
                                <Row>
                                  <Col>
                                    {showUpi &&
                                      tabContent[tabName].dependent && (
                                        <>
                                          <Dependent
                                            parent={tabName}
                                            {...tabContent[tabName].dependent}
                                            validation={validation}
                                            // {...validation}
                                          />
                                        </>
                                      )}
                                    {tabContent[tabName].tabularForm && (
                                      <TabularForm
                                        {...tabContent[tabName]}
                                        parent={tabName}
                                        data={apiValues[tabName]}
                                        // {...validation}
                                        // inputFields={
                                        //   tabContent[tabName].inputFields
                                        // }
                                        // data={validation.values[tabName]}
                                      />
                                    )}
                                  </Col>
                                </Row>
                              </Card.Body>
                            </Card>
                          </Tab>
                        ))}
                      </Tabs>
                    </Card.Body>
                    <Card.Footer className="m-2">
                      <Button
                        variant="outline-dark"
                        icon={PREVIOUS_ICON}
                        label="Previous"
                        className="btn-sm"
                        size="lg"
                        disabled={prevBtnDisable}
                        onClick={handlePreviousTab}
                      />
                      <Button
                        variant="outline-dark"
                        icon={NEXT_ICON}
                        iconRight={true}
                        label="Save & Next"
                        className="btn-sm float-right"
                        size="lg"
                        disabled={nextBtnDisable}
                        onClick={() => handleSaveNextTab(validation)}
                      />
                    </Card.Footer>
                  </Card>
                </Card.Body>
                <Card.Footer
                  style={{
                    backgroundColor: defaultColor.light,
                  }}
                >
                  <SubmitButton
                    variant="success"
                    icon={ADD_ICON}
                    label="Save Bank Detail"
                    loader={loading}
                    className="btn-sm"
                    disabled={!(validation.dirty && validation.isValid)}
                  />
                  <Button
                    variant="danger"
                    icon={RESET_ICON}
                    label="Reset"
                    className="btn-sm"
                    onClick={validation.handleReset}
                  />
                </Card.Footer>
              </Card>
            </Form>
          </>
        )}
      </Formik>
    </ComponentLayout>
  )
}

export default AddBankScreen
