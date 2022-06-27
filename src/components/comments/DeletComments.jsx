import React from 'react'
import { REACT_APP_API_URL } from '../../env'
import { deleteCom } from '../../http/filmAPI'

const DeletComments = ({com, active}) => {
    const deletCom = (com) => {
        deleteCom(com).then(() => alert("Успешно удалено!"))
        return window.location.reload()
    }
    return(
        <div>
            <div className='about-user-delet'>
                <div className={active ? 'active user-img' : 'user-img'}>
                    <img src={REACT_APP_API_URL + com.img || auth} alt="Фото юзера"/>
                </div>
                <div className={active ? 'active user-com' : 'user-com'}>
                    <h1 className='user-name'>{com.name}</h1>
                    <p className='user-text'>{com.text}</p>    
                </div>
                <div className={active ? 'active btn-delet' : 'btn-delet'}>
                    <button onClick={() => deletCom(com)}>Удалить</button>
                </div>
            </div>
        </div>
    )
}

export default DeletComments