import { observer } from 'mobx-react-lite'
import React from 'react'


const YearModal = observer(({film}) => {
    return(
        <div className="filterYear-wrapper">
            {
                film.film.map(year => 
                    <div
                    key={year.id}
                    onClick={() => film.setSelectedFilm(year)}
                    className={year.id === film.selectedFilm.id ? "activeYear-item year-item" : "year-item"}
                    >
                        {year.year}
                    </div>
                    )
            }
        </div>
    )
})

export {YearModal}