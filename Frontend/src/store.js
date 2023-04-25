import {createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { userLoginReducers } from './reducers/userReducers'
import { userRegisterReducers } from './reducers/userReducers'
import { userDetailsReducer } from './reducers/userReducers'
import { userUpdateProfileReducer } from './reducers/userReducers'
import {productListReducer, productDetailsReducer, newproductReducer} from './reducers/productReducers'
import {cartReducer} from './reducers/cartReducers'
import { userListReducer } from './reducers/userReducers'
import { editUserReducer } from './reducers/userReducers'
import { orderCreateReducer, orderPayReducer, orderDetailsReducer, orderListMyReducer,orderListReducer } from './reducers/orderReducers'

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    newProduct: newproductReducer,
    cart: cartReducer, 
    userLogin: userLoginReducers,
    userRegister: userRegisterReducers,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    userList: userListReducer,
    editUser: editUserReducer,
    orderCreate: orderCreateReducer,
    orderPay: orderPayReducer,
    orderDetails: orderDetailsReducer,
    orderListMy: orderListMyReducer,
    orderList: orderListReducer,

})


const userInfoFromStorage = localStorage.getItem('userInfo')?
JSON.parse(localStorage.getItem('userInfo')): null

const cartItemsFromStorage = localStorage.getItem('cartItems')?
JSON.parse(localStorage.getItem('cartItems')): []



const initialState = {
    cart:{cartItems: cartItemsFromStorage},
    userLogin:{userInfo:userInfoFromStorage}
}

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store