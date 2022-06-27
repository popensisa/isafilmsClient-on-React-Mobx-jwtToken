import React, { useState } from 'react'

const NewHelper = () => {
    const [activeOne, setActiveOne] = useState(true)
    const [activeTwo, setActiveTwo] = useState(false)
    const [activeThree, setActiveThree] = useState(false)
    const handleActOne = () => {
        setActiveOne(!activeOne)
        setActiveTwo(false)
        setActiveThree(false)
    } 
    const handleActTwo = () => {
        setActiveTwo(!activeTwo)
        setActiveOne(false)
        setActiveThree(false)
    } 
    const handleActThree = () => {
        setActiveThree(!activeThree)
        setActiveOne(false)
        setActiveTwo(false)
    } 
    return(
        <div className='new__bar'>
            <div className={activeOne ? "active item" : "item"} onClick={handleActOne}>Уже доступны</div>
            <div className={activeTwo ? "active item" : "item"} onClick={handleActTwo}>Новости о сайте</div>
        </div>
    )
}

export {NewHelper}