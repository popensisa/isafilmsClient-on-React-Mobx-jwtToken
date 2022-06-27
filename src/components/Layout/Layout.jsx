import React from "react" 
import { useContext } from "react"
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom"
import { Context } from "../.."
import {FILMS_ROUTE, MAIN_ROUTE} from "../../utlis/consts"
import logo from "../../assets/img/isafilms.png"
import auth from "../../assets/img/icon/auth.svg"
import search from "../../assets/img/icon/search.svg"
import "./Layout.scss"
import { adminLink, publicLink } from "./consts"
import { AuthModal } from "../modal/AuthModal"
import { useState } from "react"
import { observer } from "mobx-react-lite"
import { REACT_APP_API_URL } from "../../env"




const Layout = observer(() => {
    const {user} = useContext(Context)
    const {film} = useContext(Context)
    const location = useLocation()
    const navigate = useNavigate()
    const [active, setActive] = useState(false)
    const [value, setValue] = useState('')
    const {account} = useContext(Context)
    const token = localStorage.getItem('token')


    const filterFilm = film.film.filter(film => {
        if(value){
            return film.name.toLowerCase().includes(value.toLowerCase())
        }
    })
    
    return (
        <div className="page">
            <header>
                <div className="wrapper">
                    <div className="wrapper__flex">
                        <div className="wrapper__flex__item">
                            <NavLink to={MAIN_ROUTE}><img src={logo} alt="have problems" style={{width: "100px", objectFit: "cover", cursor: "pointer"}}/></NavLink>
                            {
                                publicLink.map(({link, title}) => 
                                    <NavLink className={location === title ? "active" : ""} key={title} to={link}>{title}</NavLink>
                                )
                            }
                            {
                                user.isAdmin && adminLink.map(({link, title}) => 
                                    <NavLink key={title} to={link}>{title}</NavLink>
                                )
                            }
                        </div>
                        <div className="wrapper__flex__item">
                            {/* Поисковая система */}
                            <form>
                                <input type="search" placeholder="Поиск..." onChange={e => setValue(e.target.value)}/>
                                <button type="submit">
                                    <img src={search} style={{width: "20px", objectFit: "cover"}}/>
                                </button>
                                <div className="result" style={value ? {} : {height: "0px", overflow: "hidden"}}>
                                    <h1>Результат запроса</h1>
                                    {filterFilm.map(film =>
                                        <div className="result-item" key={film.id} onClick={() => navigate(FILMS_ROUTE+'/'+film.id)}>
                                        <img src={REACT_APP_API_URL + film.img} alt="Фото фильма" />
                                        <span>{film.name}</span>
                                        </div>

                                    )}
                                </div>
                            </form>
                            {/* Конец поисковой системы */}
                            <img src={account?.user?.img ? REACT_APP_API_URL + account.user.img : auth} alt="Фото user" className="img-user" onClick={() => setActive(!active)}/>
                        </div>
                    </div>
                    <AuthModal active={active} setActive={setActive}/>
                </div>
            </header>

            <div className="content" onClick={() => setActive(false)}>
                <Outlet/>
            </div>

            <footer onClick={() => setActive(false)}>
                <div className="wrapper">
                    <div className="wrapper__footer">
                        <div className="wrapper__footer__items">
                            <div className="item">
                                <h3><NavLink to={MAIN_ROUTE}>ISAFILMS</NavLink> - доступный онлайн кинотеатр</h3>
                                {
                                    publicLink.map(({link,title}) => 
                                        <NavLink key={title} to={link}>{title}</NavLink>
                                    )
                                }
                            </div>
                            <div className="item">
                                <h3>Работа выполнена для дипломного проекта "<NavLink to={MAIN_ROUTE}>ISAFILMS</NavLink>"</h3>
                                <h3>Студентом: Женишов Ислам Курсантбекович</h3>
                                <h3>Куратор: Ярочкина Екатерина Дмитриевна</h3>
                                <h3>Уральский государственный колледж имени и.и. Ползунова</h3>
                                <h3>г. Екатеринбург, пр. Ленина, 28, приемная комиссия: (343) 283-07-07</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
})

export {Layout}