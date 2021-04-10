import React from 'react'
import './Videos.css'

const Videos = ({url,track}) => {
    return (
        <div className ='video-container'>
            <a href={url}>{track}</a>
        </div>

    )
}

export default Videos