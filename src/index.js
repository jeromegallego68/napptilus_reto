import { createRoot } from 'react-dom/client';
import './index.css';
import App from './containers/App/app';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga';

import reducer from './store/modules';
import rootSaga from './store/saga';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
const enhancer = compose(applyMiddleware(...middlewares));

const store = createStore(reducer, enhancer);
store.sagaTask = sagaMiddleware.run(rootSaga);

const root = createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
