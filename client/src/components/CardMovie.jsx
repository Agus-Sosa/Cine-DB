import React, { useState } from 'react'
import '../styles/movieCard.css'
import { Link } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { Tooltip } from '@nextui-org/react';
import ModalTrailer from './ModalTrailer';

const CardMovie = ({movie}) => {
    // return (
    //     <Link to={`/movie/${movie.id}`}>
    //     <div className='card'>
    //         <div className='movie_background' style={{backgroundImage: `url(${movie.image})`}}>
    //             <div className='overlay'>

    //             <p className='mb-8 ml-3' >{movie.title}</p>
    //             </div>

    //         </div>
    //     </div>
    //     </Link>
    // )

    const [isHovered, setIsHovered]= useState(false)
    const [isModalOpen, setModalOpen]= useState(false)

    const openModal = ()=> {
        setModalOpen(true)
    };

    const closeModal = ()=> {
        setModalOpen(false)
    };


    const handleMouseEnter = ()=> {
        setIsHovered(true);
    }

    const handleMouseLeave = () => {
        setIsHovered(false)
    }

    return (
<Link to={`/movie/${movie._id}`}>
            <div key={movie._id} className={`card ${isHovered ? 'hovered' : ''}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            
            >
                <div className='movie_background'>
                    <LazyLoadImage
                        alt=""
                        height="100%"
                        width="100%"
                        src={movie.image}
                        placeholderSrc={<div className="loading-symbol">Loading...</div>} // Corregido: placeholderSrc
                        wrapperClassName="background-image-wrapper"
                    />
                    {isHovered && (
                        <div className='overlay_card'>
                            <div className='overlay-content_info'>
                                <h3 className='overlay-title'>{movie.title}</h3>
                                <p className='rating'>  {movie.rating}<FaStar/></p>
                                <p className='overlay-description'>{movie.synopsis}</p>
                                {/* Otros elementos y acciones, como guardar en favoritos */}
                            </div>
                            <div className='overlay-content_buttons'>
                                <Tooltip content="Guardar en favoritos" className='tooltip rounded-lg	text-white bg-red-800 p-3	' closeDelay={100} >
                                <button className='text-red-800'><MdOutlineFavoriteBorder /></button>
                                </Tooltip>
                           
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </Link>
    );
}

export default CardMovie