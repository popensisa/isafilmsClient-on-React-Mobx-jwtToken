import React, { useState } from 'react'
import { createType } from '../../../http/filmAPI'

const CreateType = ({active}) => {
    const [value, setName] = useState('')
    const crTp = () => {
        if(value){
            createType({name: value}).then(data => {
                alert(`Значение ${value} успешно добавлено`)
                setName('')
            })
        }else{
            alert("Заполните поле")
        }
    }
    return(
            <div className='create-type' style={active ? {top: 0} : {top: 1000}}>
                <h1>Добавить тип</h1>
                <form>
                    <input placeholder='Введите название типа' value={value} onChange={e => setName(e.target.value)}/>
                </form>
                <div className='cont'>
                    <button>Очистить</button>
                    <button onClick={crTp}>Добавить</button>
                </div>
            </div>
    )
}

export {CreateType}