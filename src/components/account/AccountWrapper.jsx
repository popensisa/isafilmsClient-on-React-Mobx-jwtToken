import React, { useContext, useRef, useState } from 'react'
import { REACT_APP_API_URL } from '../../env'
import { userUpdateName } from '../../http/userAPI'

const AccountWrapper = ({account}) => {
    const [active, setActive] = useState(false)
    const [error, setError] = useState('')
    const [value, setValue] = useState('')
    const changeName = () => {
        if(!value){
            setError('Введите значение')
            return setTimeout(() => {
                setError('')
            }, 2000)
        }else if(!isNaN(value)){
            setError('Числа недопустимы')
            return setTimeout(() => {
                setError('')
            }, 2000)
        }
        userUpdateName(value).then(data => {
            console.log(data)
            window.location.reload()
        })
    }
    return(
        <div className='wrapper'>
            <div className='about-user'>
                <div className='img'>
                    <img src={REACT_APP_API_URL + account.user.img} alt="user's img"/>
                </div>
                <div className='data-user'>
                    <p>Имя пользователя: {account.user.name}</p>
                    <p>Почта пользователя: {account.user.email}</p>
                </div>
            </div>
            <div className='btns'>
                <button onClick={() => setActive(!active)}>Сменить ник</button>
            </div>
            <div className='form-name'>
                <input onChange={e => setValue(e.target.value)} type="text" pattern="[a-zA-Z]*" required className={active ? 'active inp' : 'inp'} placeholder="Введите ваш новый name"/>
                <button onClick={changeName} className={active ? "activeBtn btn-name" : 'btn-name'}>Отправить</button>
            </div>
            <p className='error'>{error}</p>
        </div>
    )
}

export default AccountWrapper