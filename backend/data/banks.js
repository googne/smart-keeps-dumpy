const banks = [
  {
    bankName: 'Axis Bank',
    accountNumber: '',
    branchDetail: {
      address: {},
      ifsc: '',
      micr: '',
    },
    accountHolderName: 'Raj Aryan',
    accountHolderRelation: 'ME', //[ME, MUMMY, PAPA, SISTER, BROTHER, FRIENDS] - used for tagging and group tagging
    internetBanking: {},
    mobileBanking: {},
    securityQuestions: [],
    upiDetail: {},
    cards: [
      {
        type: 'Credit Card', //[Credit Card, Debit Card]
        cardNumber: 5334670012115354,
        expiry: '11/25',
        cvv: 315,
        pin: 4769,
        cardHolderName: 'Raj Aryan',
        providedBy: 'Flipkart',
        isActive: true,
        currentStatus: 'ACTIVE', //[ACTIVE, EXPIRED, BLOCKED]
      },
    ],
  },
]

export default products
