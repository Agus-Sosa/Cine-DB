import React, { useState } from 'react'
import { frontPage } from '../temp/data.js'
import '../styles/coverPage.css'
import ModalTrailer from './ModalTrailer.jsx'

const CoverPage = () => {

    const containerStyle = {
        backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0) 70%), url(${frontPage.backgroundImage})`,
        
        
    }




  return (
    <section className='container_front_page' style={containerStyle}>
        <div className='container_details'>

        <div className='container_details_info'>
            <h1>{frontPage.title}</h1>
            <p>{frontPage.description}</p>
            <div className='details_info_buttons'>
                <ModalTrailer  videoUrl={frontPage.trailerLink}/>
            </div>
        </div>
        </div>

    </section>
    )
}

export default CoverPage