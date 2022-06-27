import React, { useContext, useEffect, useState } from "react"
import { NavLink, useLocation, useNavigate } from "react-router-dom"
import { LOGIN_ROUTE, MAIN_ROUTE, REG_ROUTE } from "../utlis/consts"
import down from "../assets/img/icon/download.svg"
import "./PageStyle.scss"
import { auth, getSelf, registration } from "../http/userAPI"
import { observer } from "mobx-react-lite"
import { Context } from ".."

const Auth = observer(() => {
    const {user} = useContext(Context)
    const {account} = useContext(Context)
    const [value, setValue] = useState('')
    const location = useLocation()
    const navigate = useNavigate()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [img, setFile] = useState(null)
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [signPass, setSignPass] = useState('')
    const [signEmail, setSignEmail] = useState('')

    
    const selectFile = e => {
        setFile(e.target.files[0])
        setValue(e.target.value)
    }
    const goSign = () => {
        setFile('')
        setEmail('')
        setName('')
        setPassword('')
    }
    const reg = async () => {
        if(email && name && password && img){
            const formData = new FormData()
            formData.append('email', email)
            formData.append('name', name)
            formData.append('password', password)
            formData.append('img', img)            
            registration(formData).then(() => alert("Регистрация прошла успешна")).then(() => navigate(LOGIN_ROUTE))
            setFile(null)
            setEmail('')
            setName('')
            setPassword('')
        }else if(!email){
            setError('Введите email!')
        }
        else if(!name){
            setError('Введите имя!')
        }
        else if(!password){
            setError('Заполните пароль!')
        }else if(!img){
            setError('Вставьте фотографию!')
        }else{
            setError('Заполните все правильно!')
        }
    }

    const login = () => {
        let data
        if(!isNaN(signEmail)) {
            setError('Введите email коректно!')
            return setTimeout(() => {
                setError('')
            }, 2000)
        }
        if(!signPass) {
            setError('Введите пароль')
            return setTimeout(() => {
                setError('')
            }, 2000)
        }
        if(isLogin){
            try {
                data = auth(signEmail, signPass).then(data => {
                    if(data){
                        getSelf(data).then(data => {
                            account.setUser(data)
                            navigate(MAIN_ROUTE)
                        }).then(() => {if(account.user.role == 'ADMIN') user.setIsAdmin(true)})
                    }else{
                        setError('Неправильный email или пароль')
                        return setTimeout(() => {
                            setError('')
                        }, 2000)
                    }
                })   
            } catch (e) {
            }
        }
        user.setUser(user)
        user.setIsAuth(true)
    }
    return (
        <div className="content__auth">
            <div className="content__auth__flex">
                {isLogin 
                ?
                <form noValidate className="form">
                <div className="title">
                    <h1>SIGN IN</h1>
                </div>
                <input type="email" required placeholder="Введите email" value={signEmail} onChange={e => setSignEmail(e.target.value)}/>
                <input type="password" required placeholder="Введите password" value={signPass} onChange={e => setSignPass(e.target.value)}/>
                <span className="btn" onClick={login}>ВОЙТИ</span>
                <label>Нет аккаунта? <NavLink to={REG_ROUTE} onClick={goSign}>Зарегистрируйтесь!</NavLink></label>
                <p className="error">{error}</p>
                </form>
                :
                <div className="form">
                <div className="title">
                    <h1>REGISTRATION</h1>
                </div>
                <input type="email" required placeholder="Введите email" value={email} onChange={e => setEmail(e.target.value)}/>
                <input type="text" required placeholder="Введите name" value={name} onChange={e => setName(e.target.value)}/>
                <input type="password" required placeholder="Введите password" value={password} onChange={e => setPassword(e.target.value)}/>
                <div className="input__wrapper">
                    <input name="file" type="file" value={''} onChange={selectFile} id="input__file" className="input input__file" multiple/>
                    <label htmlFor="input__file" className="input__file-button">
                        <span className="input__file-icon-wrapper"><img className="input__file-icon" src={down}  alt="Выберите файл" width="25"/></span>
                        <span className="input__file-button-text">{value ? value : "Выберите файл"}</span>
                    </label>
                </div>
                <span className="btn" onClick={reg}>ЗАРЕГИСТРИРОВАТЬСЯ</span>
                <label>Есть аккаунт? <NavLink to={LOGIN_ROUTE} onClick={goSign}>Войди!</NavLink></label>
                <p className="error">{error}</p>
                </div>
                }
            </div>
        </div>
    )
})
export {Auth}