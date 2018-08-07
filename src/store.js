import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'

import reducers from './reducers'
import { isProd } from './shared/util'

const composeEnhancers = (isProd ? null : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)))
export default store
