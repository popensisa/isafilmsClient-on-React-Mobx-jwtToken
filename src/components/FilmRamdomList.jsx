import {React} from "react"
import { FilmItem } from "./FilmItem"
import "./Comp.scss"

const FilmRandomList = ({film}) => {
    return (
        <div className="flex__row">
            {film.map(film =>
                <FilmItem key={film.id} film={film}/> 
            )}
        </div>
        
    )
}

export {FilmRandomList}