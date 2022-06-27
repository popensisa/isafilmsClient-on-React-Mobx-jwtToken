import { observer } from "mobx-react-lite"
import React, { useContext } from "react"
import { Context } from ".."
import { FilmRandomList } from "../components/FilmRamdomList"
import { PageUrl } from "../components/PageUrl"

const TheBest = observer(() => {
    const urlPage = "Лучшее"
    const {film} = useContext(Context)
    // function shuffleArray(array) {
    //     let i = array.length - 1;
    //     for (; i > 0; i--) {
    //       const j = Math.floor(Math.random() * (i + 1));
    //       const temp = array[i];
    //       array[i] = array[j];
    //       array[j] = temp;
    //     }
    //     return array;
    // }
    // const randomFilms = shuffleArray(film.film)
    return (
        <div className="best-content">
            <div className="wrapper">
                <div className="container">
                    <PageUrl urlPage={urlPage}/>
                    <h1>ISAFILMS - ТОП ISAFILMS: Лучшие фильмы</h1>
                    <FilmRandomList film={film.film}/>
                </div>
            </div>
        </div>
    )
})
export {TheBest}