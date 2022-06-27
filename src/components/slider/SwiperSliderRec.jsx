import { observer } from "mobx-react-lite";
import React from "react"
import { NavLink, useNavigate } from "react-router-dom";
import Slider from "react-slick"
import { REACT_APP_API_URL } from "../../env";
import { FILMS_ROUTE } from "../../utlis/consts";
import "./SwiperSlider.scss" 

const SwiperSliderRec = ({film}) => {
    const navigate = useNavigate()
    const settings = {
        Infinity: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true
    }

    const nav = (film) => {
        navigate(FILMS_ROUTE + "/" + film.id)
        return window.location.reload()
    }

    return(
        <div className="theBestFilms">
            <Slider {...settings}>
                {
                    film.map(film =>
                        <div key={film.id}>
                            <a onClick={() => nav(film)}>
                                <img src={REACT_APP_API_URL + film.img} alt="" width="100%"/>
                            </a>
                            <p>{film.description}</p>
                        </div>    
                    )
                }
            </Slider>
        </div>
    )
}

export {SwiperSliderRec}