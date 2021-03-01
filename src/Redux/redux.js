import { combineReducers, createStore } from 'redux'
import { UniversitiesCollectionReducer } from '../Redux/universitiesCollection-reducer'

let reducers = combineReducers({
    UniversitiesCollectionReducer
})

let store = createStore(reducers)

export default store