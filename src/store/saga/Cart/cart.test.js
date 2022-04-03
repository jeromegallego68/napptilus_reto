import { testSaga } from 'redux-saga-test-plan';

import { addProductToCart } from './';
import * as ApiService from '../../../services/api';
import * as cartActions from '../../modules/Cart/actions';

test('addProductToCart Saga test', function () {
    expect.assertions(0);

    const data = {
        payload: {
            id: 1,
            colorCode: 1000,
            storageCode: 2000
        }
    }

    const cart = { type: 'TEST' };

    testSaga(addProductToCart, data)
        .next().call(ApiService.AddProductToCart, data.payload)
        .next(cart).put({
            type: cartActions.UPDATE_CACHE_CART,
            payload: cart.data,
        })
        .next().isDone();
})