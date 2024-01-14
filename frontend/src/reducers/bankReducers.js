import {
  BANK_LIST_REQUEST,
  BANK_LIST_SUCCESS,
  BANK_LIST_FAIL,
  BANK_DETAILS_REQUEST,
  BANK_DETAILS_SUCCESS,
  BANK_DETAILS_FAIL,
  BANK_DELETE_REQUEST,
  BANK_DELETE_SUCCESS,
  BANK_DELETE_FAIL,
  BANK_CREATE_RESET,
  BANK_CREATE_FAIL,
  BANK_CREATE_SUCCESS,
  BANK_CREATE_REQUEST,
  BANK_UPDATE_REQUEST,
  BANK_UPDATE_SUCCESS,
  BANK_UPDATE_FAIL,
  BANK_UPDATE_RESET,
  BANK_CREATE_REVIEW_RESET,
  BANK_CREATE_REVIEW_FAIL,
  BANK_CREATE_REVIEW_SUCCESS,
  BANK_CREATE_REVIEW_REQUEST,
  BANK_TOP_REQUEST,
  BANK_TOP_SUCCESS,
  BANK_TOP_FAIL,
} from '../constants/bankConstants'

export const bankListReducer = (state = { banks: [] }, action) => {
  switch (action.type) {
    case BANK_LIST_REQUEST:
      return { loading: true, banks: [] }
    case BANK_LIST_SUCCESS:
      return { loading: false, ...action.payload }
    case BANK_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const bankDetailsReducer = (
  state = { bank: { reviews: [] } },
  action
) => {
  switch (action.type) {
    case BANK_DETAILS_REQUEST:
      return { loading: true, ...state }
    case BANK_DETAILS_SUCCESS:
      return { loading: false, bank: action.payload }
    case BANK_DETAILS_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const bankDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case BANK_DELETE_REQUEST:
      return { loading: true }
    case BANK_DELETE_SUCCESS:
      return { loading: false, success: true }
    case BANK_DELETE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const bankCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case BANK_CREATE_REQUEST:
      return { loading: true }
    case BANK_CREATE_SUCCESS:
      return { loading: false, success: true, bank: action.payload }
    case BANK_CREATE_FAIL:
      return { loading: false, error: action.payload }
    case BANK_CREATE_RESET:
      return {}
    default:
      return state
  }
}

export const bankUpdateReducer = (state = { bank: {} }, action) => {
  switch (action.type) {
    case BANK_UPDATE_REQUEST:
      return { loading: true }
    case BANK_UPDATE_SUCCESS:
      return { loading: false, success: true, bank: action.payload }
    case BANK_UPDATE_FAIL:
      return { loading: false, error: action.payload }
    case BANK_UPDATE_RESET:
      return { bank: {} }
    default:
      return state
  }
}

export const bankReviewReducer = (state = {}, action) => {
  switch (action.type) {
    case BANK_CREATE_REVIEW_REQUEST:
      return { loading: true }
    case BANK_CREATE_REVIEW_SUCCESS:
      return { loading: false, success: true }
    case BANK_CREATE_REVIEW_FAIL:
      return { loading: false, error: action.payload }
    case BANK_CREATE_REVIEW_RESET:
      return { bank: {} }
    default:
      return state
  }
}

export const bankTopRatedReducer = (state = { banks: [] }, action) => {
  switch (action.type) {
    case BANK_TOP_REQUEST:
      return { loading: true, banks: [] }
    case BANK_TOP_SUCCESS:
      return { loading: false, success: true, banks: action.payload }
    case BANK_TOP_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
