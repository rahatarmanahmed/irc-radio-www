import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import deepstream from 'deepstream.io-client-js'
import App from './App'
import './index.css'
import reducer from './reducer'
import { serverState } from './deepstream'
import { serverUpdate } from './actions'

const logger = store => next => action => {
    console.log('dispatching', action);
    let result = next(action);
    console.log('next state', store.getState());
    return result;
};

const store = createStore(
    reducer,
    applyMiddleware(logger, thunk)
)

ReactDOM.render(

    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)

serverState.subscribe(function (state) {
    store.dispatch(serverUpdate(state))
})
