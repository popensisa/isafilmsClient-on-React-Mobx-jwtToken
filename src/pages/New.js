import React from "react"
import { AlreadyAvailabke } from "../components/PageNews/AlreadyAvailable"
import { NewHelper } from "../components/PageNews/NewHelper"
import { PageUrl } from "../components/PageUrl"
import "./PageStyle.scss"

const New = () => {
    const urlPage = "Новинки"
    return (
        <div className="content__new">
            <div className="content__new__intro">
                <div className="container">
                    <PageUrl urlPage={urlPage}/>    
                    <div>
                        <NewHelper/>
                    </div>
                    <AlreadyAvailabke/>
                </div>
            </div>
        </div>
    )
}
export {New}