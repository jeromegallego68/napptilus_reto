import {
    call,
    put,
    takeEvery
} from 'redux-saga/effects';

import * as ApiService from 'services/api';
import * as cartActions from '../../modules/Cart/actions';

/** ********************************************** */
/** Sagas **/
/** ********************************************** */
function* addProductToCart(data) {
    try {
        const cart = yield call(ApiService.AddProductToCart, data.payload);

        yield put({
            type: cartActions.UPDATE_CACHE_CART,
            payload: cart,
        });

    } catch (e) {
        console.log('error adding product to cart')
    }
}

/** ********************************************** */
/** Watcher **/
/** ********************************************** */
export default function* sagaWatcher() {
    yield takeEvery(cartActions.ADD_PRODUCT_TO_CART, addProductToCart);
}
