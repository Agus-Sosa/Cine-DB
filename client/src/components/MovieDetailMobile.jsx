import React from 'react'
import { IoAddSharp, IoShareSocialSharp  } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import '../styles/movieDetailMobile.css'
import MovieImagesCarousel from './MovieImagesCarousel';
const MovieDetailMobile = ({movie}) => {


    const containerStyle = {
        backgroundImage:  `linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0) 40%), url(${movie.image})`,
        backgroundSize: "cover",
    }


    return (
        <section className='container_details_general_mobile'>
        <div className='container_image_details' style={containerStyle}>
        <div className='container_image_info_top'>
            <button><IoAddSharp/></button>
            <a href=""><IoShareSocialSharp/></a>
        </div>
        <div className='container_image_info_bottom'>
            <h1>{movie.title}</h1>
            <p><FaStar/> {movie.rating}/10</p>
        </div>
        </div>

        <div className='container_info_movie'>
            <div className='container_info_movie_top'>
                <div className='hours_years_details'>
                    <span>{movie.year}</span>
                    <span> • </span>
                    <span>{movie.duration} min</span>
                </div>
                <div className='genre_detail'>
                    <p>{movie.genre.join(', ')}</p>
                </div>
            </div>

            <div className='director_detail'>
                <h3>Director</h3>
                <p>{movie.director}</p>
            </div>

            <MovieImagesCarousel movie={movie}/>
            

            <div className='synopsis_detail'>
                <h3>Sinopsis</h3>
                <p>{movie.synopsis}</p>
            </div>
        </div>
        </section>
        )
}

export default MovieDetailMobile