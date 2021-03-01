import React from 'react'
import { connect } from 'react-redux'
import { UniversitiesList } from '../Components/UniversitiesListPage'
import { getList, setSavedCheckboxList } from '../Redux/universitiesCollection-reducer'


const UniversitiesListPageContainer = (props) =>{
    return(
        <UniversitiesList
        universities={props.universities}
        getList={props.getList}
        setSavedCheckboxList={setSavedCheckboxList}/>
    )
}

let mapStateToProps = (state) =>{
    return{
        universities:state.UniversitiesCollectionReducer.universities
    }
}


export default connect(mapStateToProps,{getList, setSavedCheckboxList})(UniversitiesListPageContainer)