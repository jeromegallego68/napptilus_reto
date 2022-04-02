import { combineReducers } from 'redux';

import Product from './Product';

const combinedReducer = combineReducers({
    Product,
});

const rootReducer = (state, action) => {
    return combinedReducer(state, action);
};

export default rootReducer;
