// import React, { useState, useEffect } from 'react'
// import { Link, useLocation, useNavigate } from 'react-router-dom'
// import { Form, Row, Col, Card } from 'react-bootstrap'
// import { useDispatch, useSelector } from 'react-redux'
// import { FormProvider, useForm } from 'react-hook-form'
// import Message from '../components/core/Message'
// import FormContainer from '../components/core/FormContainer'
// import { register } from '../actions/userActions'

// import Loader from '../components/core/Loader'
// import InputBox from '../components/core/InputBox'
// import { REGISTER_ICON } from '../constants/iconConstants'
// import SubmitButton from '../components/core/Btn/SubmitButton'
// import { successLight } from '../inline-styles'
// import {
//   name,
//   emailAddress,
//   password,
//   confirmPassword,
// } from '../validation/RegisterHook'
// import ValidationInput from '../components/ValidationInput'

// const RegisterScreen = () => {
//   const location = useLocation()
//   const navigate = useNavigate()
//   const methods = useForm()
//   const { control, register, handleSubmit } = methods
//   const [success, setSuccess] = useState(false)

//   const onSubmit = (data) => {
//     console.log(data)
//     methods.reset()
//     setSuccess(true)
//   }

//   console.log(methods)
//   // const [name, setName] = useState('')
//   // const [email, setEmail] = useState('')
//   // const [password, setPassword] = useState('')
//   // const [confirmPassword, setConfirmPassword] = useState('')
//   // const [message, setMessage] = useState(null)

//   const dispatch = useDispatch()

//   const userRegister = useSelector((state) => state.userRegister)
//   const { loading, error, userInfo } = userRegister

//   const redirect = location.search ? location.search.split('=')[1] : '/'

//   useEffect(() => {
//     if (userInfo) {
//       navigate(redirect)
//     }
//   }, [navigate, redirect, userInfo])

//   // const submitHandler = (e) => {
//   //   e.preventDefault()
//   //   if (password !== confirmPassword) {
//   //     setMessage('Passwords do not match')
//   //   } else {
//   //     dispatch(register(name, email, password))
//   //   }
//   // }

//   return (
//     <FormContainer size={10}>
//       <FormProvider {...methods}>
//         <Form onSubmit={handleSubmit(onSubmit)}>
//           <Card
//             className="border-success text-left"
//             style={{ borderWidth: '1.5px' }}
//           >
//             <Card.Header
//               style={{
//                 backgroundColor: successLight,
//                 fontWeight: 'bolder',
//                 fontSize: 20,
//               }}
//               className="text-primary"
//             >
//               Sign Up
//             </Card.Header>
//             <Card.Body className="py-2 px-4">
//               {/* {message && <Message variant="danger">{message}</Message>} */}
//               {error && <Message variant="danger">{error}</Message>}
//               <Row>
//                 <Col>
//                   <ValidationInput {...name} />
//                 </Col>
//                 <Col>
//                   <ValidationInput {...emailAddress} />
//                   {/* <InputBox
//                     type="email"
//                     label="Email Address"
//                     value={email}
//                     onChange={setEmail}
//                   /> */}
//                 </Col>
//               </Row>
//               <Row>
//                 <Col>
//                   <ValidationInput {...password} />

//                   {/* <InputBox
//                     type="password"
//                     label="Password"
//                     value={password}
//                     onChange={setPassword}
//                   /> */}
//                 </Col>
//                 <Col>
//                   <ValidationInput {...confirmPassword} />

//                   {/* <InputBox
//                     type="password"
//                     label="Confirm Password"
//                     value={confirmPassword}
//                     onChange={setConfirmPassword}
//                   /> */}
//                 </Col>
//               </Row>
//             </Card.Body>
//             <Card.Footer style={{ backgroundColor: successLight }}>
//               <SubmitButton
//                 variant="warning"
//                 icon={REGISTER_ICON}
//                 label="Register"
//                 loader={loading}
//                 className="btn-sm"
//               />
//               <span className="float-right mt-1">
//                 Have an Account?{' '}
//                 <Link
//                   to={redirect ? `/login?redirect=${redirect}` : '/login'}
//                   className="text-info"
//                 >
//                   <strong>Login</strong>
//                 </Link>
//               </span>
//             </Card.Footer>
//           </Card>
//         </Form>
//       </FormProvider>
//     </FormContainer>
//   )
// }

// export default RegisterScreen
