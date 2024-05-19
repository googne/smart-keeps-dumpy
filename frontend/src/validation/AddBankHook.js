import * as yup from 'yup'
import {
  stringRequired,
  registeredMobile,
  onlyNumberRequired,
  upiId,
  onlyNumber,
} from './ValidationRule'
import { getInputFieldParams, getSelectParams } from '../utils/formInputUtils'

const bankUPIs = {
  fields: ['upiApp', 'upiId', 'upiPin'],
  inputFields: {
    // upiApp: getInputFieldParams('upiApp'),
    upiApp: getSelectParams('upiApp', 'UPI APP', [
      'PhonePe',
      'AmazonPay',
      'GooglePay',
      'CredUPI',
    ]),
    upiId: getInputFieldParams('upiId', 'UPI ID'),
    upiPin: getInputFieldParams('upiPin', 'UPI PIN'),
  },
  initialValues: {
    upiApp: 'PhonePe',
    upiId: '9122@ybl',
    upiPin: '1234',
  },
  // initialValues: {
  //   upiApp: '',
  //   upiId: '',
  //   upiPin: '',
  // },
  validationSchema: yup.array().of(
    yup.object().shape({
      upiApp: stringRequired,
      upiId,
      upiPin: onlyNumberRequired,
    })
  ),
}

const cards = {
  fields: [
    'cardNumber',
    'cardHolderName',
    'cardHolderRelation',
    'expiryDate',
    'cardCVV',
    'cardType',
    'cardPin',
    'cardStatus',
  ],
  inputFields: {
    cardNumber: getInputFieldParams('cardNumber', null, 'text'),
    cardHolderName: getInputFieldParams('cardHolderName'),
    cardHolderRelation: getInputFieldParams('cardHolderRelation'),
    expiryDate: getInputFieldParams('expiryDate'),
    cardCVV: getInputFieldParams('cardCVV'),
    cardType: getSelectParams('cardType', null, ['Debit', 'Credit']),
    cardPin: getInputFieldParams('cardPin'),
    cardStatus: getSelectParams('cardStatus', null, [
      'Active',
      'Block',
      'Expired',
    ]),
  },
  initialValues: {
    cardNumber: '',
    cardHolderName: '',
    cardHolderRelation: '',
    expiryDate: '',
    cardCVV: '',
    cardType: '',
    cardPin: '',
    cardStatus: '',
  },
  validationSchema: {
    cardNumber: stringRequired,
    cardHolderName: stringRequired,
    cardHolderRelation: stringRequired,
    expiryDate: stringRequired,
    cardCVV: stringRequired,
    cardType: stringRequired,
    cardPin: stringRequired,
    cardStatus: stringRequired,
  },
}

const credentials = {
  fields: [
    'cardNumber',
    'cardHolderName',
    'cardHolderRelation',
    'expiryDate',
    'cardCVV',
    'cardType',
    'cardPin',
    'cardStatus',
  ],
  inputFields: {
    cardNumber: getInputFieldParams('cardNumber', null, 'text'),
    cardHolderName: getInputFieldParams('cardHolderName'),
    cardHolderRelation: getInputFieldParams('cardHolderRelation'),
    expiryDate: getInputFieldParams('expiryDate'),
    cardCVV: getInputFieldParams('cardCVV'),
    cardType: getSelectParams('cardType', null, ['Debit', 'Credit']),
    cardPin: getInputFieldParams('cardPin'),
    cardStatus: getSelectParams('cardStatus', null, [
      'Active',
      'Block',
      'Expired',
    ]),
  },
  initialValues: {
    cardNumber: '',
    cardHolderName: '',
    cardHolderRelation: '',
    expiryDate: '',
    cardCVV: '',
    cardType: '',
    cardPin: '',
    cardStatus: '',
  },
  validationSchema: {
    cardNumber: stringRequired,
    cardHolderName: stringRequired,
    cardHolderRelation: stringRequired,
    expiryDate: stringRequired,
    cardCVV: stringRequired,
    cardType: stringRequired,
    cardPin: stringRequired,
    cardStatus: stringRequired,
  },
}

const bankDetail = {
  fields: [
    'bankName',
    'accountNumber',
    'registeredMobile',
    'accountType',
    'bankIFSC',
    'bankMICR',
    'accountHolderName',
    'accountHolderRelation',
  ],
  inputFields: {
    bankName: getInputFieldParams('bankName'),
    accountNumber: getInputFieldParams('accountNumber', null, 'text'),
    registeredMobile: getInputFieldParams('registeredMobile'),
    accountType: getSelectParams('accountType', null, [
      'Saving',
      'NA',
      'Current',
    ]),
    bankIFSC: getInputFieldParams('bankIFSC', 'IFSC Code'),
    bankMICR: getInputFieldParams('bankMICR', 'MICR Code'),
    accountHolderName: getInputFieldParams('accountHolderName'),
    accountHolderRelation: getInputFieldParams('accountHolderRelation'),
  },
  dependent: {
    name: 'bankUPIs',
    fields: bankUPIs.fields,
    inputFields: bankUPIs.inputFields,
  },
  initialValues: {
    bankName: 'ICICI Bank',
    accountNumber: '627901516581',
    registeredMobile: '9122851421',
    accountType: 'Saving',
    bankIFSC: 'ICIC009852',
    bankMICR: '',
    accountHolderName: 'Raj Aryan',
    accountHolderRelation: 'Myself',
    bankUPIs: [bankUPIs.initialValues],
  },
  validationSchema: {
    bankName: stringRequired,
    accountNumber: onlyNumberRequired,
    registeredMobile,
    accountType: stringRequired,
    bankMICR: onlyNumber,
    accountHolderName: stringRequired,
    accountHolderRelation: stringRequired,
    bankUPIs: bankUPIs.validationSchema,
  },
}

export const addBankHook = {
  // tabNames: ['bankDetail'],
  tabNames: ['bankDetail', 'cards', 'credentials', 'preview'],
  tabParams: {
    bankDetail: {
      eventKey: 'tab0',
      title: 'Bank Detail',
    },
    cards: {
      eventKey: 'tab1',
      title: 'Card Detail',
      disabled: true,
    },
    credentials: {
      eventKey: 'tab2',
      title: 'Bank Credentials',
      disabled: true,
    },
    preview: {
      eventKey: 'tab3',
      title: 'Preview',
      disabled: true,
    },
  },
  tabContent: {
    bankDetail: {
      fields: bankDetail.fields,
      inputFields: bankDetail.inputFields,
      dependent: bankDetail.dependent,
    },
    cards: {
      fields: cards.fields,
      inputFields: cards.inputFields,
      tabularForm: true,
    },
    credentials: {
      fields: credentials.fields,
      inputFields: credentials.inputFields,
    },
    preview: {
      fields: credentials.fields,
      inputFields: credentials.inputFields,
    },
  },
  initialValues: {
    // ...bankDetail.initialValues,
    bankDetail: bankDetail.initialValues,
    cards: cards.initialValues,
    credentials: credentials.initialValues,
  },
  validationSchema: yup.object().shape({
    // ...bankDetail.validationSchema,
    bankDetail: yup.object().shape(bankDetail.validationSchema),
    cards: yup.object().shape(cards.validationSchema),
    credentials: yup.object().shape(credentials.validationSchema),
  }),
}
