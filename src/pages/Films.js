import { observer } from "mobx-react-lite";
import React, { useContext, useState } from "react"
import { Context } from "..";
import { WrapperPage } from "../components/WrapperPage";
import "./PageStyle.scss"

const Films = observer(() => {
    const {film} = useContext(Context)
    const [active, setActive] = useState(false)
    const urlPage = "Фильмы"
    const textFilm = [{
        title: "Лучшие фильмы смотреть онлайн",
        subtitle: "Лучшие фильмы смотрите только с нами!"
    }]
    return (
        <div className="content__films">
            <WrapperPage film={film} active={active} setActive={setActive} urlPage={urlPage} text={textFilm}/>
        </div>
    )
})
export {Films}