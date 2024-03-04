import React from 'react'
import { IoAddSharp } from "react-icons/io5";

const MovieDetailMobile = ({movie}) => {
    return (
        <section>
        <div className='container_image_details'>
            <img src={movie.image} alt="" />
        </div>

        <div className='container_info_details'>
            <div className='info_top'>
                <div className='title'>
                    <h5>{movie.title}</h5>
                    <p>{movie.year}</p>
                </div>
                <div className='add_movie_container'>
                    <button><IoAddSharp/></button>
                </div>
            </div>
        </div>
        </section>
        )
}

export default MovieDetailMobile