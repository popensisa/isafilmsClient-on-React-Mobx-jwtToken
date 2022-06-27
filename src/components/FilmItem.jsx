import {React} from "react" 
import { useLocation, useNavigate } from "react-router-dom"
import { FILMS_ROUTE } from "../utlis/consts"
import right from "../assets/img/icon/arrowRight.svg"
import { REACT_APP_API_URL } from "../env"

const FilmItem = ({film}) => {
    const navigate = useNavigate()
    const location = useLocation()
    const letFilm = () => {
        navigate(location.pathname + "/" + film.id)
    }
    return(
        <div className="item__col">
            <div className="item__img" style={{cursor: "pointer"}} onClick={letFilm}>
                <div className="item__img__bg">
                    <img src={right}/>
                </div>
                <img src={REACT_APP_API_URL + film.img} alt="Image"/>
            </div>
            <div className="text">
                <p className="title">
                    {film.name}
                </p>
                <p className="desc">
                    {film.description}
                </p>
            </div>
        </div>
    )
}

export {FilmItem}