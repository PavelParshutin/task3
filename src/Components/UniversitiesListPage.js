import React from 'react'
import { getUniversities } from '../API/api'

export const UniversitiesList = () =>{
    const getList = () =>{
        getUniversities()
    }
    return (
        <div>
            <button onClick={getList}>GET List</button>
        </div>
    )
}