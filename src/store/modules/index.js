import { combineReducers } from 'redux';

import Product from './Product';
import Cart from './Cart';

const combinedReducer = combineReducers({
    Product,
    Cart,
});

const rootReducer = (state, action) => {
    return combinedReducer(state, action);
};

export default rootReducer;
