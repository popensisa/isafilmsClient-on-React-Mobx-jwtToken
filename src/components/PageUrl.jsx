import {React} from 'react'
import { NavLink } from 'react-router-dom'
import { MAIN_ROUTE } from '../utlis/consts'
import "./Comp.scss"

const PageUrl = ({...props}) => {
    return(
        <div className="page-url">
            <span><NavLink to={MAIN_ROUTE}>ISAFILMS</NavLink> / {props.urlPage}</span>
        </div>
    )
}

export {PageUrl}