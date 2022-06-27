import { observer } from "mobx-react-lite";
import React from "react"
import { NavLink, useNavigate } from "react-router-dom";
import Slider from "react-slick"
import { REACT_APP_API_URL } from "../../env";
import { FILMS_ROUTE } from "../../utlis/consts";
import "./SwiperSlider.scss" 

const SwiperSlider = ({film}) => {
    const settings = {
        Infinity: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true
    }
    return(
        <div className="theBestFilms">
            <Slider {...settings}>
                {
                    film.map(film =>
                        <div key={film.id}>
                            <NavLink to={FILMS_ROUTE + "/" + film.id}>
                                <img src={REACT_APP_API_URL + film.img} alt="" width="100%"/>
                            </NavLink>
                            <p>{film.description}</p>
                        </div>    
                    )
                }
            </Slider>
        </div>
    )
}

export {SwiperSlider}