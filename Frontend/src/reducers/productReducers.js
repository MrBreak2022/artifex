import {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,

    CREATE_PRODUCT_REQUEST,
    CREATE_PRODUCT_SUCCESS,
    CREATE_PRODUCT_FAIL,

    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,
} from '../constants/productConstants'

export const productListReducer = (state = {products:[]}, action) => {
    switch (action.type) {
        case PRODUCT_LIST_REQUEST:
            return {loading:true, products: []};
        case PRODUCT_LIST_SUCCESS:
            return {loading:false, products: action.payload};
        case PRODUCT_LIST_FAIL:
            return {loading:false, error: action.payload};
        
        default:
            return state;
    }
};

export const newproductReducer = (state = {product: {} }, action) => {
    switch (action.type) {
        case CREATE_PRODUCT_REQUEST:
            return {loading:true, ...state}
        case CREATE_PRODUCT_SUCCESS:
            return {loading:false, success: action.payload, product: action.payload.product}
        case CREATE_PRODUCT_FAIL:
            return {loading:false, error: action.payload}
        
        default:
            return state;
    }
};

export const productDetailsReducer = (state = {product:[]}, action) => {
    switch (action.type) {
        case PRODUCT_DETAILS_REQUEST:
            return {loading:true, ...state};
        case PRODUCT_DETAILS_SUCCESS:
            return {loading:false, product: action.payload};
        case PRODUCT_DETAILS_FAIL:
            return {loading:false, error: action.payload};
        
        default:
            return state;
    }
};