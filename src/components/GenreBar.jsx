import {React, useState } from "react" 
import { observer } from "mobx-react-lite"
import { useContext } from "react"
import { Context } from ".."
import arrowDown from "../assets/img/icon/down.svg"
import arrowUp from "../assets/img/icon/up.svg"
import close from "../assets/img/icon/close.svg"
import "./Comp.scss"
import { CountryModal } from "./modal/CountryModal"
import { GenreModal } from "./modal/GenreModal"
import { YearModal } from "./modal/YearModal"
import { RaitingModal } from "./modal/RaitingModal"

const GenreBar = observer(() => {
    const {film} = useContext(Context)
    const [filter, setFilter] = useState({
        genre: false,
        country: false,
        year: false,
        raiting: false,
    })
    const {
        genre,
        country,
        year,
        raiting,
    } = filter

    const handleFilterGenre = () => {
        setFilter({...filter, genre: !filter.genre, year: false, country: false, raiting: false})
    }
    const handleFilterYear = () => {
        setFilter({...filter, year: !filter.year, raiting: false, country: false, genre: false})
    }
    const handleFilterCountry = () => {
        setFilter({...filter, country: !filter.country, year: false, raiting: false, genre: false})
    }
    const handleFilterRaiting = () => {
        setFilter({...filter, raiting: !filter.raiting, year: false, country: false, genre: false})

    }
    const handleCloseAll = () => {
        setFilter({...filter, country: false, raiting: false, year: false, genre: false})
        film.setSelectedGenre('')
        film.setSelectedCountry('')
        film.setSelectedFilm('')
        film.setSelectedRaiting('')
    }


    return( 
        <div className="genreWrapper">
            <div className="flex-genre">
                <div className="filter-item genre">
                    <div className="modalOn" onClick={handleFilterGenre}>
                        <h1>Жанр</h1>
                        {genre 
                        ?   <img src={arrowUp} alt=""/>
                        :   <img src={arrowDown} alt=""/>
                        } 
                    </div>
                    {genre && <GenreModal film={film}/>}
                </div> 
                <div className="filter-item country">
                    <div className="modalOn" onClick={handleFilterCountry}>
                        <h1>Страна</h1>
                        {country 
                        ?   <img src={arrowUp} alt=""/>
                        :   <img src={arrowDown} alt=""/>
                        } 
                    </div>
                    {country && <CountryModal film={film}/>}
                </div>
                <div className="filter-item year">
                    <div className="modalOn" onClick={handleFilterYear}>
                        <h1>Год</h1>
                        {year 
                        ?   <img src={arrowUp} alt=""/>
                        :   <img src={arrowDown} alt=""/>
                        } 
                    </div>
                    {year && <YearModal film={film}/>}
                </div>
                {/* <div className="filter-item raiting">
                    <div className="modalOn" onClick={handleFilterRaiting}>
                        <h1>Рейтинг IMDb</h1>
                        {raiting 
                        ?   <img src={arrowUp} alt=""/>
                        :   <img src={arrowDown} alt=""/>
                        } 
                    </div>
                    {raiting && <RaitingModal film={film}/>}
                </div> */}
                <div className="filter-item raiting">
                    <div className="modalOn" onClick={handleCloseAll}>
                        <h1>Очистить</h1>
                        <img src={close}/>
                    </div>
                </div>
            </div>
        </div>
    )
})

export {GenreBar}