import { 
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS__FAIL,
  PRODUCT_DETAILS__SUCCESS,
  PRODUCT_LIST_FAIL, 
  PRODUCT_LIST_REQUEST, 
  PRODUCT_LIST_SUCCESS 
} from "../Constants/ProductConstants";


// PRODUCT LIST
export const productListReducer = (state = { products:[]}, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true,products:[]};
    case PRODUCT_LIST_SUCCESS:
      return { loading: true,products:[]};
    case PRODUCT_LIST_FAIL:
      return { loading: true,products:[]};
    default:
      return state;
  }
};

// SINGLE PRODUCT 
export const productDeatailsReducer = (state = { product: {reviews:[]} }, action) => {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return { ...state,loading: true};
    case PRODUCT_DETAILS__SUCCESS:
      return { loading: false,products: action.payload };
    case PRODUCT_DETAILS__FAIL:
      return { loading: false,products: action.payload };
    default:
      return state;
  }
};
