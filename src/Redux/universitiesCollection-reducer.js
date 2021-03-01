import { getUniversities } from '../API/api';

const SET_UNIVERSITIES = "SET_UNIVERSITIES";


let initialState = {
    universities:[],
    country: ""
}

export const UniversitiesCollectionReducer = (state=initialState, action) =>{
    switch(action.type){
        case SET_UNIVERSITIES:
            return{
                ...state,
                universities: action.list
            }
        default:
            return state;
    }
}

const setUniversities = (list) =>({type:SET_UNIVERSITIES, list})

export const getList = (county) => (dispatch) =>{
    getUniversities(county).then(response => {
        dispatch(setUniversities(response))
    })
}

