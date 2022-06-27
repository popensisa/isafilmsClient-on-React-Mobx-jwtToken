import React, { useContext } from "react"
import { NavLink } from "react-router-dom"
import Slider from "react-slick"
import { Context } from "../.."
import { REACT_APP_API_URL } from "../../env"
import { FILMS_ROUTE } from "../../utlis/consts"
import "./SwiperSlider.scss" 

const BigSwiperSlider = () => {
    const {film} = useContext(Context)
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500
    }
    return(
        <div className="theBestFilms">
            <Slider {...settings}>
                {
                    film.film.map(film =>
                        <div key={film.id}>
                            <NavLink to={FILMS_ROUTE + "/" + film.id}>
                                <img src={REACT_APP_API_URL + film.img} alt="" width="100%" height='350px'/>
                            </NavLink>
                        </div>    
                    )
                }
            </Slider>
        </div>
    )
}

export {BigSwiperSlider}