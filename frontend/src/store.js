import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
  bankListReducer,
  bankDetailsReducer,
  bankDeleteReducer,
  bankCreateReducer,
  bankUpdateReducer,
  bankReviewReducer,
  bankTopRatedReducer,
} from './reducers/bankReducers'

const reducer = combineReducers({
  bankList: bankListReducer,
  bankDetails: bankDetailsReducer,
  bankDelete: bankDeleteReducer,
  bankCreate: bankCreateReducer,
  bankUpdate: bankUpdateReducer,
  bankReviewCreate: bankReviewReducer,
  bankTopRated: bankTopRatedReducer,
  // cart: cartReducer,
  // userLogin: userLoginReducer,
  // userRegister: userRegisterReducer,
  // userDetails: userDetailsReducer,
  // userUpdateProfile: userUpdateProfileReducer,
  // userList: userListReducer,
  // userDelete: userDeleteReducer,
  // userUpdate: userUpdateReducer,
  // orderCreate: orderCreateReducer,
  // orderDetails: orderDetailsReducer,
  // orderPay: orderPayReducer,
  // orderDeliver: orderDeliverReducer,
  // orderList: orderListReducer,
  // loginUserOrderList: loginUserOrderListReducer,
})

const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : []

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null

const shippingAddressFromStorage = localStorage.getItem('shippingAddress')
  ? JSON.parse(localStorage.getItem('shippingAddress'))
  : {}

const paymentMethodFromStorage = localStorage.getItem('paymentMethod')
  ? JSON.parse(localStorage.getItem('paymentMethod'))
  : null

const initialState = {
  cart: {
    cartItems: cartItemsFromStorage,
    shippingAddress: shippingAddressFromStorage,
    paymentMethod: paymentMethodFromStorage,
  },
  userLogin: { userInfo: userInfoFromStorage },
}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
