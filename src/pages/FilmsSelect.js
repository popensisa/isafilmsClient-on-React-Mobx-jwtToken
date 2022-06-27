import React, { useContext, useEffect, useState } from "react" 
import { NavLink, useParams } from "react-router-dom"
import { FilmPlayer } from "../components/VideoPlay/FilmPlayer"
import { FILMS_ROUTE, MAIN_ROUTE } from "../utlis/consts"
import { RecRandomFilm } from "../components/RecRandomFilm"
import { Comment } from "../components/comments/Comment"
import { fetchComment, fetchOneFilm } from "../http/filmAPI"
import { REACT_APP_API_URL } from "../env"

const FilmsSelect = () => {
    const [film, setFilm] = useState({}) 
    const [com, setCom] = useState([])
    const {id} = useParams()
    useEffect(() => {
        fetchOneFilm(id).then(data => setFilm(data))
    }, [])
    useEffect(() => {
        fetchComment(id).then(data => setCom(data))
    }, [])
    return(
        <div className="film__select">
            <div className="container">
                <div className="url-film">
                    <span><NavLink to={MAIN_ROUTE}>ZETFLIX</NavLink> / <NavLink to={FILMS_ROUTE}>Фильмы</NavLink> / </span>
                    <span>{film.name}</span>
                </div>
                <div className="info">
                    <FilmPlayer url={REACT_APP_API_URL + film.video}/>
                    <div className="info__about">
                        <div className="title">
                            <h1>{film.name} {film.year}</h1>
                        </div>
                        <div className="rait">
                            <span>IMDb: {film.raiting} </span>
                            <span>Страна: {film.country} </span>
                            <span>Жанр: {film.genreId}</span>
                        </div>
                        <div className="actor">
                            <span>Актеры: {film.actor}</span>
                        </div>
                        <div className="description">
                            <h1>О фильме</h1>
                            <p>{film.description}</p>
                        </div>
                    </div>
                </div>
                <Comment com={com} setCom={setCom}/>
                <div className="recommend">
                    <RecRandomFilm/>
                </div>
            </div>
        </div>
    )
}

export {FilmsSelect}