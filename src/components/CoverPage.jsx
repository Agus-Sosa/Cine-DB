import React, { useState } from 'react'
import { frontPage } from '../temp/data.js'
import '../styles/coverPage.css'
import ModalTrailer from './ModalTrailer.jsx'
import { IoPlayOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Loader from './Loader.jsx';
const CoverPage = () => {

    const containerStyle = {
        backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0) 70%), url(${frontPage.backgroundImage})`,
        
        
    }




  return (
    <section className='container_front_page' style={containerStyle}>
        <div className='container_details'>
        <div className='container_details_img'>
            <article>
                <LazyLoadImage className='image' placeholderSrc={<Loader/>} src={frontPage.image} alt={frontPage.title} />
            </article>
        </div>
        <div className='container_details_info'>
            <h1>{frontPage.title}</h1>
            <p>{frontPage.description}</p>
            <span>{frontPage.genre}</span>
            <div className='details_info_buttons'>
                <ModalTrailer  videoUrl={frontPage.trailerLink}/>
            </div>
        </div>
        </div>
    </section>
    )
}

export default CoverPage