import { observer } from "mobx-react-lite"
import React, { useState } from "react" 


const RaitingModal = observer(({film}) => {
    const count = [
        {id: 1, number: 1},
        {id: 2, number: 2},
        {id: 3, number: 3},
        {id: 4, number: 4},
        {id: 5, number: 5},
        {id: 6, number: 6},
        {id: 7, number: 7},
        {id: 8, number: 8},
        {id: 9, number: 9},
        {id: 10, number: 10},
    ]
    return(
        <div className="filterYear-wrapper">
            {
                count.map(numb => 
                    <div
                    key={numb.id}
                    onClick={() => film.setSelectedRaiting(numb)}
                    className={numb.id === film.selectedRaiting.id ? "activeYear-item year-item" : "rait-item"}
                    >
                        IMBd {numb.number}
                    </div>
                    )
            }
        </div>
    )
})

export {RaitingModal}