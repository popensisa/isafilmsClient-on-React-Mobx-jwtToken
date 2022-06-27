import React, { useEffect, useState } from "react"
import DeletComments from "../components/comments/DeletComments"
import { CreateCountry } from "../components/modal/AdminModal/CreateCountry"
import { CreateFilm } from "../components/modal/AdminModal/CreateFilm"
import { CreateGenre } from "../components/modal/AdminModal/CreateGenre"
import { CreateType } from "../components/modal/AdminModal/CreateType"
import { DeletFilms } from "../components/UI/DeletFilms"
import { getAllComments } from "../http/filmAPI"
import arrowDown from '../assets/img/icon/down.svg'
import arrowUp from '../assets/img/icon/up.svg'

const Admin = () => {
    const [type, setType] = useState(true)
    const [genre, setGenre] = useState()
    const [country, setCountry] = useState()
    const [comments, setComments] = useState([])
    const [active, setActive] = useState(true)
    const handleType = () => {
        setType(true) 
        setGenre(false)
        setCountry(false)
    }
    const handleGenre = () => {
        setType(false) 
        setGenre(true)
        setCountry(false)
    }
    const handleCountry = () => {
        setType(false) 
        setGenre(false)
        setCountry(true)
    }

    useEffect(() => {
        getAllComments().then(data => setComments(data))
    }, [])
    return (
        <div className="admin-content">
            <div className="container">
                <h1>Администратор</h1>
                <div className="btn">
                    <button onClick={handleType}>Добавить типа</button>
                    <button onClick={handleGenre}>Добавить жанр</button>
                    <button onClick={handleCountry}>Добавить страну</button>
                </div>
                <div className='creat-content'>
                    <CreateType active={type}/>
                    <CreateGenre active={genre}/>
                    <CreateCountry active={country}/>
                </div>
                <div className="film-long">
                    <CreateFilm/>
                </div>
                <div className="edit-films">
                    <DeletFilms/>
                </div>
                <div className="edit-comments">
                    <div className="show-com" onClick={() => setActive(!active)}>Комментарии <img src={active ? arrowDown : arrowUp} alt="arrow"/></div>
                    {comments.map(com => 
                        <DeletComments key={com.id} com={com} active={active}/>
                    )}
                </div>
            </div>
        </div>
    )
}
export {Admin}