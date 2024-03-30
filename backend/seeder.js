import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'
import users from './data/users.js'
// import banks from './data/banks.js'
import User from './models/userModel.js'
// import Bank from './models/bankModel.js'
// import Order from './models/orderModel.js'
import connectDB from './config/db.js'

dotenv.config()

connectDB()

const importData = async () => {
  try {
    await User.deleteMany()
    // await Bank.deleteMany()
    // await Order.deleteMany()

    await User.insertMany(users)

    // const adminUser = createdUsers[0]._id
    // const adminUser = users[0]._id

    // const sampleBanks = banks.map((bank) => {
    //   return { ...bank, user: '649522179384a1223d140ee6' }
    // })

    // await Bank.insertMany(sampleBanks)

    console.log('Data Imported!'.green.inverse)
    process.exit()
  } catch (error) {
    console.error(`${error}`.red.inverse)
    process.exit(1)
  }
}

const destroyData = async () => {
  try {
    await User.deleteMany()
    await Bank.deleteMany()
    await Order.deleteMany()

    console.log('Data Destroyed!'.red.inverse)
    process.exit()
  } catch (error) {
    console.error(`${error}`.red.inverse)
    process.exit(1)
  }
}

if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}
