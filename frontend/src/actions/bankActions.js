import axios from 'axios'

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
  BANK_CREATE_REQUEST,
  BANK_CREATE_SUCCESS,
  BANK_CREATE_FAIL,
  BANK_UPDATE_REQUEST,
  BANK_UPDATE_SUCCESS,
  BANK_UPDATE_FAIL,
  BANK_CREATE_REVIEW_REQUEST,
  BANK_CREATE_REVIEW_SUCCESS,
  BANK_CREATE_REVIEW_FAIL,
  BANK_TOP_SUCCESS,
  BANK_TOP_FAIL,
  BANK_TOP_REQUEST,
} from '../constants/bankConstants'

export const listBanks =
  (keyword = '', pageNumber = '') =>
  async (dispatch) => {
    try {
      dispatch({ type: BANK_LIST_REQUEST })

      const { data } = await axios.get(
        `/api/banks?keyword=${keyword}&pageNumber=${pageNumber}`
      )

      dispatch({
        type: BANK_LIST_SUCCESS,
        payload: data,
      })
    } catch (error) {
      dispatch({
        type: BANK_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }

export const listBankDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: BANK_DETAILS_REQUEST })

    const { data } = await axios.get(`/api/banks/${id}`)

    dispatch({
      type: BANK_DETAILS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: BANK_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const deleteBank = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: BANK_DELETE_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    await axios.delete(`/api/banks/${id}`, config)
    dispatch({ type: BANK_DELETE_SUCCESS })
  } catch (error) {
    dispatch({
      type: BANK_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const createBank = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: BANK_CREATE_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.post('/api/banks', {}, config)

    dispatch({
      type: BANK_CREATE_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: BANK_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const updateBank = (bank) => async (dispatch, getState) => {
  try {
    dispatch({ type: BANK_UPDATE_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.put(`/api/banks/${bank._id}`, bank, config)

    dispatch({ type: BANK_UPDATE_SUCCESS, payload: data })
    dispatch({ type: BANK_DETAILS_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: BANK_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const createBankReview =
  (bankId, review) => async (dispatch, getState) => {
    try {
      dispatch({ type: BANK_CREATE_REVIEW_REQUEST })

      const {
        userLogin: { userInfo },
      } = getState()

      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userInfo.token}`,
        },
      }

      await axios.post(`/api/banks/${bankId}/reviews`, review, config)

      dispatch({ type: BANK_CREATE_REVIEW_SUCCESS })
    } catch (error) {
      dispatch({
        type: BANK_CREATE_REVIEW_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }

export const listTopBanks = () => async (dispatch) => {
  try {
    dispatch({ type: BANK_TOP_REQUEST })

    const { data } = await axios.get(`/api/banks/top`)

    dispatch({ type: BANK_TOP_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: BANK_TOP_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
