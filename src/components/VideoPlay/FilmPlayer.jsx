import React, {useState, useRef, useEffect} from "react"
import ReactPlayer from "react-player"
import "./video-player.scss"

const FilmPlayer = ({url}) => {
    const handle = ({played}) => {
        if(played >= 0.005){
            played(0)
        }
        console.log(played)
    }
    return(
        <div className="react-wrapper">
            <ReactPlayer
                className="react-player"
                url={url}
                controls={true}
                width="100%"
                height="auto"
                onProgress={handle}
            />
        </div>
    )
}

export {FilmPlayer}