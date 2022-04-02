import * as cartActions from './actions';

const initialState = {
    cart: {},
};

const state = (state = initialState, action) => {
    switch (action.type) {
        case cartActions.UPDATE_CACHE_CART:
            return {
                ...state,
                cart: action.payload,
            };
        default:
            return state;
    }
};

export default state
