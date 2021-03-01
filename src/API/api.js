import * as axios from 'axios';


export const getUniversities = (country, name = '') => (
    axios.get(`http://universities.hipolabs.com/search?name=${name}&country=${country}`)
    .then(response => response.data)
)
