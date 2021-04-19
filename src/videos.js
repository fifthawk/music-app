import React from 'react'
import './Videos.css'

const Videos = ({url,track}) => {
    return (
        <div className='container'>
        <div className ='link-container'>
            <a href={url}>{track}</a>
        </div>
        </div>

    )
}

export default Videos