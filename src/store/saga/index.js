import { fork } from 'redux-saga/effects';

import Product from './Product';

export default function* rootSaga() {
  yield fork(Product);
}
