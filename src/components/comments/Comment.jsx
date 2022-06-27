import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Context } from '../..'
import { createComment } from '../../http/filmAPI'
import { ShowCom } from './ShowCom'

const Comment = ({com, setCom}) => {
    const [value, setValue] = useState('')
    const [error, setError] = useState(false)
    const {account} = useContext(Context)
    const {id} = useParams()
    const addComment = () => {
        if(!isNaN(value)) {
            setError(true)
            return setTimeout(() => {
                setError(false)
            }, 2000)
        }
        if(!value) {
            setError(true)
            return setTimeout(() => {
                setError(false)
            }, 2000)
        }
        createComment(id, value, account.user.img).then(() => {
            window.location.reload()
        }).then(() => setValue(''))
    }
    return(
        <div className='comment-content'>
            <div className='write-comment'>
                <div className='form-comment'>
                    <input style={error ? {border: '3px solid red'} : {}} type="text" placeholder='Введите ваш комментарий...' value={value} onChange={e => setValue(e.target.value)}/>
                    <button onClick={addComment}>Отправить</button>
                </div>
                <div className='comment-check'>
                    <h1>Внимательно!</h1>
                    <p>Комментарии строго проверяются администрацией и возможны баны, будьте деликатны в их написании</p>
                </div>
            </div>
            <div className='show-comment'>
                {com.map(com =>
                    <ShowCom com={com} key={com.id}/>
                )}
            </div>
        </div>
    )
}

export {Comment}