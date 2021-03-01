import React, { useEffect, useState } from 'react'
import style from '../Components/univercitiesListPage.module.css'

export const UniversitiesList = (props) =>{
    const [country, enterCountry] = useState("")
    const [list, setList] = useState([])
    let [saveList, addToSaveList] = useState([])

    useEffect(() => {
        if(localStorage.getItem('setCountry')){
            props.getList(localStorage.getItem('setCountry'))
        }
    }, [])
    useEffect(() => {
        setList(props.universities)
    }, [props.universities])

    const enterNewCountry = (e) =>{
        enterCountry(e.target.value)
    }

    const getList = () =>{
        setList([])
        props.getList(country)
        localStorage.setItem("setCountry", country)
        enterCountry('')
        addToSaveList([])
    }
    const reset = () =>{
        setList([])
        enterCountry('')
        addToSaveList([])
        localStorage.removeItem('setCountry')
    }
    const setSaveList = (event, item) =>{
        let tempList = []
        if(event.target.checked){
            tempList = [...saveList]
            addToSaveList(tempList.concat(item))
        }else{
            let index = saveList.findIndex(i => i.name===item.name)
            tempList = [...saveList]
            tempList.splice(index,1)
            addToSaveList(tempList)
        }
    }


    return (
        <div>
            <input className={style.input} placeholder="Введите страну" value={country} onChange={enterNewCountry}/>
            <button className={style.btn} onClick={getList}>Отправить</button>
            <button className={style.btn} onClick={reset}>Сбросить</button>

            {list.length>0 ?
            <div>
                <div className={style.countOfSafe}>Количество отмеченных Checkbox {saveList.length}</div>
            <table className={style.table}>
                <tr><th className={style.table_cell}>№ п/п</th>
                <th className={style.table_cell}>webpages</th>
                <th className={style.table_cell}>name</th>
                <th className={style.table_cell}>domains</th>
                <th className={style.table_cell}>alpha_two_code</th>
                <th className={style.table_cell}>country</th>
                <th className={style.table_cell}>state-province</th>
                <th className={style.table_cell}>Сохратить в мой список</th></tr>
                {list.map((item,index) => <tr key={index.toString()}>
                    <td className={style.table_cell}>{index+1}</td>
                    <td className={style.table_cell}><a href={item.web_pages}>{item.web_pages}</a></td>
                    <td className={style.table_cell}>{item.name}</td>
                    <td className={style.table_cell}>{item.domains}</td>
                    <td className={style.table_cell}>{item.alpha_two_code}</td>
                    <td className={style.table_cell}>{item.country}</td>
                    <td className={style.table_cell}>{item["state-province"]}</td>
                    <td className={style.table_cell}><input type='checkbox'  onChange={(e) => setSaveList(e, item)}/></td>
                    </tr>)}
            </table>
            </div>
            : null}
        </div>
    )
}