import React, { useContext, useState } from "react"
import { Context } from ".."
import { WrapperPage } from "../components/WrapperPage"

const Cartoons = () => {
    const {film} = useContext(Context)
    const [active, setActive] = useState(false)
    const urlPage = "Мультфильмы"
    const textCartoons = [{
        title: "Лучшие мультфильмы смотреть онлайн",
        subtitle: "Лучшие мультфильмы смотрите только с нами!"
    }]
    return (
        <div className="content__films">
            <WrapperPage film={film} active={active} setActive={setActive} urlPage={urlPage} text={textCartoons}/>
        </div>
    )
}
export {Cartoons}