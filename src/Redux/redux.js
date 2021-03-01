import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { UniversitiesCollectionReducer } from '../Redux/universitiesCollection-reducer'

let reducers = combineReducers({
    UniversitiesCollectionReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store