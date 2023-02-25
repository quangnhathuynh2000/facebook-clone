import { Avatar } from '@mui/material'
import React from 'react'
import './Story.css'
function Story({ images, profileSrc, title }) {
    return (
        <div style={{ backgroundImage: `url(${images})` }} className='story'>
            <Avatar className='story__avatar' src={profileSrc} />
            <h4>{title}</h4>
        </div>
    )
}

export default Story