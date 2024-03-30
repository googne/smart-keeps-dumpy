export const name = {
  name: 'name',
  label: 'Name',
  type: 'text',
  id: 'name',
  placeholder: 'Enter name ...',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
    maxLength: {
      value: 30,
      message: '30 characters max',
    },
  },
}

export const emailAddress = {
  name: 'emailAddress',
  label: 'Email Address',
  type: 'email',
  id: 'emailAddress',
  placeholder: 'Enter Email Address ...',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
    pattern: {
      value: '^[w-.]+@([w-]+.)+[w-]{2,4}$',
      message: 'email invalid',
    },
  },
}

export const password = {
  name: 'password',
  label: 'Password',
  type: 'password',
  id: 'password',
  placeholder: 'Enter Password ...',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
    minLength: {
      value: 6,
      message: 'min 6 characters',
    },
  },
}

// export const confirmPassword = {
//   name: 'confirmPassword',
//   label: 'Confirm Password',
//   type: 'password',
//   id: 'confirmPassword',
//   placeholder: 'Enter Confirm Password ...',
//   validation: {
//     required: {
//       value: true,
//       message: 'required',
//     },
//   },
// }
