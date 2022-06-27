import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react' 
import { Context } from '../..'
import { REACT_APP_API_URL } from '../../env'
import { deleteFilm } from '../../http/filmAPI'

const DeletFilms = observer(() => {
    const {film} = useContext(Context)

    const clickDestroy = (id) => {
        deleteFilm(id).then(data => alert("Фильм удален"))
    }
    return( 
        <div className='flex'>
            {film.film.map(film =>
                <div key={film.id} className="flex-item">
                    <img src={REACT_APP_API_URL + film.img} alt="На удаление"/>
                    <h1>{film.name}</h1>
                    <div className='delet-btn' onClick={() => clickDestroy(film.id)}>Удалить</div>
                </div>
            )}
        </div>
    )
})

export {DeletFilms}