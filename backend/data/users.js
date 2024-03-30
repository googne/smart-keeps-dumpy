import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Super Admin',
    email: 'admin@googne.com',
    password: bcrypt.hashSync('123', 10),
    isAdmin: true,
  },
  {
    name: 'Aryan Raj',
    email: 'aryan@googne.com',
    password: bcrypt.hashSync('123', 10),
    isAdmin: true,
  },
  {
    name: 'Mithun Kumar',
    email: 'mithun@googne.com',
    password: bcrypt.hashSync('123', 10),
  },
]

export default users
