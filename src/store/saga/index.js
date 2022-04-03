import { fork } from 'redux-saga/effects';

import Product from './Product';
import Cart from './Cart';

export default function* rootSaga() {
  yield fork(Product);
  yield fork(Cart);
}
