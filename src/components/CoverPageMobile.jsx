import React from 'react'
import { frontPage } from '../temp/data'
import '../styles/coverPageMobile.css'
const CoverPageMobile = () => {

    const containerStyle = {
        backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0) 70%), url(${frontPage.image})`,
    }

    return (
        <section className='container_front_page_mobile' style={containerStyle}>
            <div className='container_details_info'>
                <h3>{frontPage.title}</h3>
                <div className='details_info_movie'>
                    <span>{frontPage.genre}</span>
                    <span>•</span>
                    <span>{frontPage.year}</span>
                </div>
            </div>
        </section>
        )
}

export default CoverPageMobile