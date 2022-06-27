import { observer } from 'mobx-react-lite'
import React, { useContext, useState } from 'react'
import { Context } from '../../..'
import { createFilm } from '../../../http/filmAPI'

const CreateFilm = observer(() => {
    const {film} = useContext(Context)
    const [nameFilm, setNameFilm] = useState('')
    const [rait, setRait] = useState()
    const [year, setYear] = useState()
    const [actor, setActor] = useState('')
    const [img, setImg] = useState(null)
    const [video, setVideo] = useState(null)
    const [desc, setDesc] = useState('')
    const [country, setCountry] = useState(null)
    const [act, setAct] = useState()
    const [activ, setActiv] = useState()

    const selectedImg = (e) => {
        setImg(e.target.files[0])
        console.log(img)
    }
    const addFilm = () => {
        const formData = new FormData()
        formData.append('name', nameFilm)
        formData.append('raiting', rait)
        formData.append('country', country)
        formData.append('year', year)
        formData.append('actor', actor)
        formData.append('description', desc)
        formData.append('img', img)
        formData.append('video', video)
        formData.append('typeId', film.selectedType.id)
        formData.append('genreId', film.selectedGenre.id)
        createFilm(formData).then(data => alert("Добавлен " + data))
    }

    return(
        <div className='create-film'>
            <h1>Добавить фильм</h1>
            <form>
                <div className='dropdown-one'>
                    <div className='dropdown-btn' onClick={() => setAct(!act)}>{film.selectedType.name || 'Выберите тип'}</div>
                    <div className='drowdawn-menu' style={act ? {} : {display: 'none'}}>
                        {film.type.map(type =>
                            <div className='drowdawn-item' 
                            key={type.id}
                            onClick={() => film.setSelectedType(type)}
                            >{type.name}</div>
                        )}
                    </div>
                </div>
                <div className='dropdown-one'>
                    <div className='dropdown-btn' onClick={() => setActiv(!activ)}>{film.selectedGenre.name || 'Выберите жанр'}</div>
                    <div className='drowdawn-menu' style={activ ? {} : {display: 'none'}}>
                        {film.genre.map(genre =>
                            <div className='drowdawn-item'
                            key={genre.id}
                            onClick={() => film.setSelectedGenre(genre)}
                            >{genre.name}</div>
                        )}
                    </div>
                </div>
                <select defaultValue={'default'} onChange={e => setCountry(e.target.value)}>
                        <option disabled value='default'>{film.selectedCountry.name || "Выберите страну"}</option>
                    {film.country.map(country =>
                        <option 
                        key={country.id}
                        >{country.name}</option>
                    )}
                </select>
                <input placeholder='Введите название фильма' value={nameFilm} onChange={e => setNameFilm(e.target.value)}/>
                <input placeholder='Введите рейтинг фильма' value={rait} onChange={e => setRait(e.target.value)}/>
                <input placeholder='Введите год' type="number" pattern='[0-9]{,4}' required value={year} onChange={e => setYear(e.target.value)}/>
                <input placeholder='Введите актеров' value={actor} onChange={e => setActor(e.target.value)}/>
                <input placeholder='Вставьте фото' type="file" onChange={selectedImg}/>
                <input placeholder='Вставьте видео' type="file" onChange={e => setVideo(e.target.files[0])}/>
                <textarea placeholder='Введите описание' cols='50' maxLength='255' value={desc} onChange={e => setDesc(e.target.value)}/>
            </form>
            <div className='cont'>
                <button>Очистить</button>
                <button onClick={addFilm}>Добавить</button>
            </div>
        </div>
    )
})

export {CreateFilm}