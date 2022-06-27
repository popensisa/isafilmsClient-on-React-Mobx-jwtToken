import {React, useContext} from 'react' 
import { AboutUs } from './AboutUs'
import { PageUrl } from './PageUrl'
import { FilmList } from './FilmList'
import { GenreBar } from './GenreBar'
import { SwiperSlider } from './slider/SwiperSlider'
import { observer } from 'mobx-react-lite'
import { Context } from '..'


const WrapperPage = observer(({...props}) => {
    const {film} = useContext(Context)
    const url = window.location.pathname
    function typeFilms(array) {
        if(url == '/films'){
            const array2 = []
            for (let i = 0; i < array.length; i++) {
                if(array[i].typeId == 1){
                    array2[i] = array[i]
                }else{
                    continue
                }
            }
            return array2
        }else if(url == '/cartoons'){
            const array2 = []
            for (let i = 0; i < array.length; i++) {
                if(array[i].typeId == 2){
                    array2[i] = array[i]
                }else{
                    continue
                }
            }
            return array2
        }else if(url == '/anime'){
            const array2 = []
            for (let i = 0; i < array.length; i++) {
                if(array[i].typeId == 4){
                    array2[i] = array[i]
                }else{
                    continue
                }
            }
            return array2
        }
    }

    const onlyFilms = typeFilms(film.sortFilms)
    return(
        <div className="container">
            <div className="about__us">
                <PageUrl urlPage={props.urlPage}/>
                <h1>{props.text[0].title}</h1>
                <strong>{props.text[0].subtitle}</strong>
                {props.active && <AboutUs/>}
                <br/>
                <span className="toggle-text" onClick={() => props.setActive(!props.active)}>{props.active ? "Свернуть" : "Развернуть"}</span>
            </div>
            <SwiperSlider film={props.film.film}/>
            <div className="column">
                    <GenreBar/>
            </div>
            <div className="film-center">
                    <FilmList film={onlyFilms}/>
            </div>
        </div>
    )
})

export {WrapperPage}