import {React} from 'react' 
import { AboutUs } from './AboutUs'
import { PageUrl } from './PageUrl'
import { FilmList } from './FilmList'
import { GenreBar } from './GenreBar'
import { SwiperSlider } from './slider/SwiperSlider'


const MainWrapper = ({...props}) => {
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
            <div className="flex">
                    <FilmList film={props.film}/>
            </div>
        </div>
    )
}

export {MainWrapper}