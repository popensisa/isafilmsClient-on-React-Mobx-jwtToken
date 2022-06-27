import { observer } from "mobx-react-lite"
import React from "react" 
import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { Context } from "../.."
import { ACCOUNT_ROUTE, LOGIN_ROUTE, MAIN_ROUTE, REG_ROUTE } from "../../utlis/consts"


const AuthModal = observer(({active, setActive}) => {
    const {user} = useContext(Context)
    const {account} = useContext(Context)

    const logOut = () => {
        setActive(false)
        user.setIsAuth(false)
        user.setIsAdmin(false)
        account.setUser()
        localStorage.removeItem('token')
    }
    const logIn = () => {
        setActive(false)
    }
    return(
        <div className={active ? "modal-wrapper active" : "modal-wrapper"}>
            <div className="index">
                <div className="block"></div>
            {
                user.isAuth 
                ?   <div className="flex">
                        <NavLink to={ACCOUNT_ROUTE} onClick={() => setActive(false)}>Мой профиль</NavLink>
                        <NavLink to={MAIN_ROUTE} onClick={logOut}>Выйти</NavLink>
                    </div>
                :   <div className="flex">
                        <NavLink to={LOGIN_ROUTE} onClick={logIn}>Войти</NavLink>
                        <NavLink to={REG_ROUTE} onClick={() => setActive(false)}>Зарегистрироваться</NavLink>
                    </div>
            }
            </div>
        </div>
    )
})

export {AuthModal}