import {
    call,
    put,
    takeEvery
} from 'redux-saga/effects';

import * as ApiService from '../../../services/api';
import * as productActions from '../../modules/Product/actions';

/** ********************************************** */
/** Sagas **/
/** ********************************************** */
function* getProducts() {
    try {
        const products = yield call(ApiService.GetProducts);

        yield put({
            type: productActions.UPDATE_CACHE_PRODUCTS,
            payload: products,
        });

    } catch (e) {
        console.log('error getting products')
    }
}

function* getProductDetails(data) {
    try {
        const product_details = yield call(ApiService.GetProductDetails, data.payload.productID);

        yield put({
            type: productActions.UPDATE_CACHE_PRODUCT_DETAILS,
            payload: product_details,
        });

    } catch (e) {
        console.log('error getting product details')
    }
}

/** ********************************************** */
/** Watcher **/
/** ********************************************** */
export default function* sagaWatcher() {
    yield takeEvery(productActions.GET_PRODUCTS, getProducts);
    yield takeEvery(productActions.GET_PRODUCT_DETAILS, getProductDetails);
}
