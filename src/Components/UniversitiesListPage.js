import React, { useEffect, useState } from 'react'
import style from '../Components/univercitiesListPage.module.css'

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
    const reset = () =>{
        setList([])
        enterCountry('')
    }
    return (
        <div>
            <input placeholder="enter country" value={country} onChange={enterNewCountry}/>
            <button onClick={getList}>GET List</button>
            <button onClick={reset}>Reset</button>

            {list.length>0 ?
            <table className={style.table}>
                <tr><th className={style.table_cell}>#</th>
                <th className={style.table_cell}>webpages</th>
                <th className={style.table_cell}>name</th>
                <th className={style.table_cell}>domains</th>
                <th className={style.table_cell}>alpha_two_code</th>
                <th className={style.table_cell}>country</th>
                <th className={style.table_cell}>state-province</th>
                <th className={style.table_cell}>Save</th></tr>
                {list.map((item,index) => <tr key={index.toString()}>
                    <td className={style.table_cell}>{index+1}</td>
                    <td className={style.table_cell}><a href={item.web_pages}>{item.web_pages}</a></td>
                    <td className={style.table_cell}>{item.name}</td>
                    <td className={style.table_cell}>{item.domains}</td>
                    <td className={style.table_cell}>{item.alpha_two_code}</td>
                    <td className={style.table_cell}>{item.country}</td>
                    <td className={style.table_cell}>{item["state-province"]}</td>
                    <td className={style.table_cell}><input type='checkbox'/></td>
                    </tr>)}
            </table>
            : null}
        </div>
    )
}