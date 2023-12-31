import { createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import { 
  productDeatailsReducer, 
  productListReducer,
} from './Reducers/ProductReducers';
import { cartReducer } from "./Reducers/CartReducers";
import { userLoginReducer } from "./Reducers/userReducers";

const reducer = combineReducers({
  productList : productListReducer,
  productDetails:productDeatailsReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
});

const cartItemsFromLocalStorage = localStorage.getItem("cartItem")
  ? JSON.parse(localStorage.getItem("cartItem"))
  : [];

// login
const userInfoFromLocalStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  cart: {
    cartItems: cartItemsFromLocalStorage,
  },
  userLogin:{ userInfo:userInfoFromLocalStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
