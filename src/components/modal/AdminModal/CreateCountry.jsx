import React from 'react' 

const CreateCountry = ({active}) => {
    return(
        <div className='create-country' style={active ? {top: 0} : {top: 1000}}>
        <h1>Добавить страну</h1>
        <form>
            <input placeholder='Введите название жанра'/>
        </form>
        <div className='cont'>
            <button>Очистить</button>
            <button>Добавить</button>
        </div>
        </div>
    )
}

export {CreateCountry}