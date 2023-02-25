import React from 'react'
import './Widgets.css'
function Widgets() {
    const url = `https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook&tabs=timeline&width=340&height=1500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId`
    return (
        <div className='widgets'>
            <iframe
                title='widgets'
                src={url}
                style={{ border: 'none', height: '100%', width: '340', overflow: 'hidden' }}
                scrolling="no"
                frameBorder="0"
                allowFullScreen={true}
                allow="encrypted-media"
            ></iframe>
        </div>
    )
}

export default Widgets