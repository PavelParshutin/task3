import React, { useEffect, useState } from 'react'


export const UniversitiesList = (props) =>{
    const [country, enterCountry] = useState("")
    const [list, setList] = useState([])
    const enterNewCountry = (e) =>{
        enterCountry(e.target.value)
    }
useEffect(() => {
    setList(props.universities)
}, [props.universities])

    const getList = () =>{
        props.getList(country)
        enterCountry("")
        console.log(props.universities)
    }
    return (
        <div>
            <input placeholder="enter country" value={country} onChange={enterNewCountry}/>
            <button onClick={getList}>GET List</button>
            <table>
                <tr><th>#</th><th>webpages</th><th>name</th><th>domains</th><th>alpha_two_code</th><th>country</th><th>state-province</th></tr>
                {list.map((item,index) => <tr key={index.toString()}>
                    <td>{index+1}</td>
                    <td>{item.web_pages}</td>
                    <td>{item.name}</td>
                    <td>{item.domains}</td>
                    <td>{item.alpha_two_code}</td>
                    <td>{item.country}</td>
                    <td>{item.["state-province"]}</td>
                    </tr>)}
            </table>

            {/* {props.universities.map(item => <div>item.name</div>)} */}
        </div>
    )
}