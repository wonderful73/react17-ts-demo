import {applyMiddleware, combineReducers, createStore} from "redux"
import ReduxThunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

const reducer = combineReducers({

})

const enhancer = process.env.NODE_ENV === 'development' ? composeWithDevTools(
  applyMiddleware(ReduxThunk)
) :applyMiddleware(ReduxThunk)

const store = createStore(reducer, enhancer)

export default store
