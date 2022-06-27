import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Context } from '../..'
import { REACT_APP_API_URL } from '../../env'

const AlreadyAvailabke = observer(() => {
    const {film} = useContext(Context)
    return(
        <div className='news-page-content'>
            {film.film.map(film =>
                <div className='all-film' key={film.id}>
                    <div className='head'>
                        <div className='small-img'><img src={REACT_APP_API_URL + film.img}/></div>
                        <div className='title'>
                            <h1>{film.name}</h1>
                            <p>{film.typeId}</p>
                        </div>
                    </div>
                    <div className='mid'>
                        <div className='big-img'>
                            <img src={REACT_APP_API_URL + film.img} width="100%"/>
                        </div>
                        <div className='about-film'>
                            <div className='name'>
                                <h1>{film.name}</h1>   
                                <p>{film.year}</p>
                                <p>{film.country} {film.genreId}</p> 
                            </div>
                            <div className='desc'>
                                <p>{film.description}</p>
                            </div>
                        </div>
                    </div>
                    <div className='foot'></div>
                </div>
            )
            }
        </div>
    )
})

export {AlreadyAvailabke}