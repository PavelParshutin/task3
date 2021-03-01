import { getUniversities } from '../API/api';

const SET_UNIVERSITIES = "SET_UNIVERSITIES";
const SET_SAVED_CHECKBOX_LIST = "SET_SAVED_CHECKBOX_LIST";


let initialState = {
    universities:[],
    savedCheckBoxList:[],
    country: ""
}

export const UniversitiesCollectionReducer = (state=initialState, action) =>{
    switch(action.type){
        case SET_UNIVERSITIES:
            return{
                ...state,
                universities: action.list
            }
            case SET_SAVED_CHECKBOX_LIST:
                return{
                    ...state,
                    savedCheckBoxList: action.saveList
                }
        default:
            return state;
    }
}

const setUniversities = (list) =>({type:SET_UNIVERSITIES, list})
export const setSavedCheckboxList = (saveList) =>({type:SET_UNIVERSITIES, saveList})

export const getList = (county) => (dispatch) =>{
    getUniversities(county).then(response => {
        dispatch(setUniversities(response))
    })
}

