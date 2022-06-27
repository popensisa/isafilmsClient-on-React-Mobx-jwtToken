import React, {useContext} from "react"
import { Context } from ".."
import { BigSwiperSlider } from "../components/slider/BigSwiperSlider"
import { SwiperSlider } from "../components/slider/SwiperSlider"
import { observer } from "mobx-react-lite"

const Main = observer(() => {
    const {film} = useContext(Context)
    return (
        <div className="content__main">
            <div className="container">
                <div className="item">
                    <BigSwiperSlider/>
                </div>
                <div className="item__two">
                    <h1>ISAFILMS</h1>
                    <div className="item__slider">
                        <h2>Рекомендованные фильмы</h2>
                        <SwiperSlider film={film.film}/>
                    </div>
                    <div className="item__slider">
                        <h2>Новинки</h2>
                        <SwiperSlider film={film.film}/>
                    </div>
                    <div className="item__slider">
                        <h2>Мультфильмы</h2>
                        <SwiperSlider film={film.film}/>
                    </div>
                    <div className="item__slider">
                        <h2>Аниме</h2>
                        <SwiperSlider film={film.film}/>
                    </div>
                </div>
            </div>
        </div>
    )
})
export {Main}