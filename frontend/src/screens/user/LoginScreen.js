import React, { useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormLayout from '../../layout/FormLayout'
import Message from '../../components/core/Message'
import { RESET_ICON, SIGN_IN_ICON } from '../../constants/iconConstants'
import { login } from '../../actions/userActions'
import { successLight } from '../../inline-styles'
import SubmitButton from '../../components/core/Btn/SubmitButton'
import { Formik, Form, Field } from 'formik'
import { loginHook } from '../../validation/HelperHook'
import Button from '../../components/core/Btn/Button'
import InputBox from '../../components/core/formInput/InputBox'

const LoginScreen = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { fields, validationSchema, initialValues, inputFields } = loginHook
  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error: userLoginError, userInfo } = userLogin

  const redirect = location.search ? location.search.split('=')[1] : '/'
  useEffect(() => {
    if (userInfo) {
      navigate('/home')
    }
  }, [navigate, userInfo])

  const handleSubmit = (values) => {
    const { email, password } = values
    dispatch(login(email, password))
  }

  return (
    <>
      <FormLayout size={6}>
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
                    Sign In
                  </Card.Header>
                  <Card.Body className="py-2 px-4">
                    {userLoginError && (
                      <Message variant="danger">{userLoginError}</Message>
                    )}
                    {fields.map((field, index) => (
                      <Field
                        key={index}
                        {...inputFields[field]}
                        name={`${field}`}
                        component={InputBox}
                      />

                      // <InputBox
                      //   key={index}
                      //   {...inputFields[field]}
                      //   {...validation}
                      // />
                    ))}
                  </Card.Body>
                  <Card.Footer style={{ backgroundColor: successLight }}>
                    <SubmitButton
                      variant="warning"
                      icon={SIGN_IN_ICON}
                      label="Sign In"
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
                        to={
                          redirect
                            ? `/register?redirect=${redirect}`
                            : '/register'
                        }
                        className="text-info"
                      >
                        <strong>Register</strong>
                      </Link>
                    </span>
                  </Card.Footer>
                </Card>
              </Form>
            </>
          )}
        </Formik>
      </FormLayout>
    </>
  )
}

export default LoginScreen
