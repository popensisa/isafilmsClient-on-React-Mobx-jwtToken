import React, { useContext } from 'react'
import { Context } from '../..'
import { REACT_APP_API_URL } from '../../env'
import auth from "../../assets/img/icon/auth.svg"
import { observer } from 'mobx-react-lite'

const ShowCom = observer(({com}) => {
    return(
        <div className='about-user'>
            <div className='user-img'>
                <img src={REACT_APP_API_URL + com.img || auth} alt="Фото юзера"/>
            </div>
            <div className='user-com'>
                <h1 className='user-name'>{com.name}</h1>
                <p className='user-text'>{com.text}</p>    
            </div>
        </div>
    )
})

export {ShowCom}