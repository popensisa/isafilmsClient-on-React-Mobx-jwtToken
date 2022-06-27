import React, {useState} from 'react'
import { createGenre } from '../../../http/filmAPI'

const CreateGenre = ({active}) => {
    const [value, setName] = useState('')
    const genre = () => {
        if(value){
            createGenre({name: value}).then(data => {
                alert(`Значение ${value} успешно добавлено`)
                setName('')
            })
        }else{
            alert("Заполните поле")
        }
    }
    return(
        <div className='create-genre' style={active ? {top: 0} : {top: 1000}}>
            <h1>Добавить жанр</h1>
            <form>
                <input placeholder='Введите название жанра' value={value} onChange={e => setName(e.target.value)}/>
            </form>
            <div className='cont'>
                <button>Очистить</button>
                <button onClick={genre}>Добавить</button>
            </div>
        </div>
    )
}

export {CreateGenre}