import { observer } from "mobx-react-lite"
import React, { useContext, useEffect } from "react"
import { Context } from "../.."


const GenreModal = observer(({film}) => {


    return(
        <div className="filterGenre-wrapper">
            {
                film.genre.map(genre => 
                    <div
                    onClick={() => film.setSelectedGenre(genre)}
                    className={genre.id === film.selectedGenre.id ? "activeGenreBar genre-item" : "genre-item"}
                    key={genre.id}
                    >
                        <span>
                            {genre.name}
                        </span>
                    </div>
                )
            }
            </div>
    )
})

export {GenreModal}