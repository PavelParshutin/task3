import * as axios from 'axios';


export const getUniversities = (name = 'Middle', country = 'Turkey') => (
    axios.get(`http://universities.hipolabs.com/search?name=${name}&county=${country}`)
    .then(response => response.data)
)
