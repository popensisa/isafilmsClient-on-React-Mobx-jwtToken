import { observer } from "mobx-react-lite"
import React, { useContext, useEffect } from "react"
import { Context } from "../.."


const CountryModal = observer(({film}) => {


    return(
        <div className="filterYear-wrapper">
            {
                film.country.map(country => 
                    <div
                    key={country.id}
                    onClick={() => film.setSelectedCountry(country)}
                    className={country.id === film.selectedCountry.id ? "activeYear-item year-item" : "year-item"}
                    >
                        {country.name}
                    </div>
                    )
            }
        </div>
    )
})

export {CountryModal}