import * as productActions from './actions';

const initialState = {
    products: [],
    product_details: {}
};

const state = (state = initialState, action) => {
    switch (action.type) {
        case productActions.UPDATE_CACHE_PRODUCTS:
            return {
                ...state,
                products: action.payload,
            };
        case productActions.UPDATE_CACHE_PRODUCT_DETAILS:
            return {
                ...state,
                product_details: action.payload,
            };
        default:
            return state;
    }
};

export default state
