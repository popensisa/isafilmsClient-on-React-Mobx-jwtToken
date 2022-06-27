import React, { useContext, useState} from "react"
import { Context } from ".."
import { WrapperPage } from "../components/WrapperPage"

const Anime = () => {
    const {film} = useContext(Context)
    const [active, setActive] = useState(false)
    const urlPage = "Аниме"
    const textCartoons = [{
        title: "Лучшие аниме смотреть онлайн",
        subtitle: "Лучшие аниме смотрите только с нами!"
    }]
    return (
        <div className="content__films">
            <WrapperPage film={film} active={active} setActive={setActive} urlPage={urlPage} text={textCartoons}/>
        </div>
    )
}
export {Anime}