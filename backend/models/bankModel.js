import mongoose from 'mongoose'

const bankSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    bankName: {
      type: String,
      required: true,
    },
    accountNumber: {
      type: Number,
      required: true,
    },
    accountHolderName: {
      type: String,
      required: true,
    },
    accountHolderRelation: {
      type: String,
      required: true,
    },
    branchDetail: {
      ifsc: { type: String },
      micr: { type: String },
      address: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Address',
      },
    },
    internetBanking: {},
    mobileBanking: {},
    securityQuestions: [],
    upiDetail: {},
    card: [
      {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Card',
      },
    ],
  },
  {
    timestamps: true,
  }
)

const Bank = mongoose.model('Bank', bankSchema)
export default Bank
