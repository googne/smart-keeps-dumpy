import React, { useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Card, Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Formik, Form, Field } from 'formik'
import Message from '../../components/core/Message'
import { register } from '../../actions/userActions'
import { REGISTER_ICON, RESET_ICON } from '../../constants/iconConstants'
import SubmitButton from '../../components/core/Btn/SubmitButton'
import { successLight } from '../../inline-styles'
import { registerHook } from '../../validation/HelperHook'
import Button from '../../components/core/Btn/Button'
import FormLayout from '../../layout/FormLayout'
import ArrayInputBox from '../../components/core/ArrayInputBox'

const RegisterScreen = () => {
  const { fields, validationSchema, initialValues, inputFields } = registerHook
  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const userRegister = useSelector((state) => state.userRegister)
  const { loading, error: userRegisterError, userInfo } = userRegister

  const redirect = location.search ? location.search.split('=')[1] : '/'

  useEffect(() => {
    if (userInfo) {
      navigate(redirect)
    }
  }, [navigate, redirect, userInfo])

  const handleSubmit = (values, { resetForm }) => {
    const { name, email, password } = values
    dispatch(register(name, email, password))
    resetForm()
  }

  return (
    <FormLayout>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {(validation) => (
          <>
            <Form>
              <Card
                className="border-success text-left"
                style={{ borderWidth: '1.5px' }}
              >
                <Card.Header
                  style={{
                    backgroundColor: successLight,
                    fontWeight: 'bolder',
                    fontSize: 20,
                  }}
                  className="text-info"
                >
                  Sign Up
                </Card.Header>
                <Card.Body className="py-2 px-4">
                  {userRegisterError && (
                    <Message variant="danger">{userRegisterError}</Message>
                  )}
                  <Row>
                    {fields.map((field, index) => (
                      <Col key={index} md={6}>
                        <Field
                          {...inputFields[field]}
                          name={`${field}`}
                          component={ArrayInputBox}
                        />
                      </Col>
                    ))}
                  </Row>
                </Card.Body>
                <Card.Footer style={{ backgroundColor: successLight }}>
                  <SubmitButton
                    variant="warning"
                    icon={REGISTER_ICON}
                    label="Register"
                    loader={loading}
                    className="btn-sm"
                  />
                  <Button
                    variant="warning"
                    icon={RESET_ICON}
                    label="Reset"
                    className="btn-sm"
                    onClick={validation.handleReset}
                  />
                  <span className="float-right mt-1">
                    New Customer?{' '}
                    <Link
                      to={redirect ? `/login?redirect=${redirect}` : '/login'}
                      className="text-info"
                    >
                      <strong>Login</strong>
                    </Link>
                  </span>
                </Card.Footer>
              </Card>
            </Form>
          </>
        )}
      </Formik>
    </FormLayout>
  )
}

export default RegisterScreen
