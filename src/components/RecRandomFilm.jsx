import {React, useContext } from 'react'
import { Context } from '..';
import { SwiperSlider } from './slider/SwiperSlider';
import "./Comp.scss"
import { observer } from 'mobx-react-lite';
import { SwiperSliderRec } from './slider/SwiperSliderRec';
const RecRandomFilm = observer(() => {
    const {film} = useContext(Context)
    function shuffleArray(array) {
        let i = array.length - 1;
        for (; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          const temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
        return array;
    }
    const randomFilms = shuffleArray(film.film)
    return(
        <div className='rec-random'>
            <h1>Смотреть также</h1>
            <SwiperSliderRec film={film.film}/>
        </div>
    )
})

export {RecRandomFilm}