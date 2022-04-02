import { testSaga } from 'redux-saga-test-plan';

import { getProducts, getProductDetails } from './';
import * as ApiService from '../../../services/api';
import * as productActions from '../../modules/Product/actions';

test('getProducts Saga test', function () {
    expect.assertions(0);

    const products = { type: 'TEST' };

    testSaga(getProducts)
        .next().call(ApiService.GetProducts)
        .next(products).put({
            type: productActions.UPDATE_CACHE_PRODUCTS,
            payload: products.data,
        })
        .next().isDone();
})

test('getProductDetails Saga test', function () {
    expect.assertions(0);

    const data = {
        payload: {
            productID: 1
        }
    }
    const product_details = { type: 'TEST' };

    testSaga(getProductDetails, data)
        .next().call(ApiService.GetProductDetails, data.payload.productID)
        .next(product_details).put({
            type: productActions.UPDATE_CACHE_PRODUCT_DETAILS,
            payload: product_details.data,
        })
        .next().isDone();
})