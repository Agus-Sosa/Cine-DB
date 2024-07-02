import React from 'react'
import {IoShareSocialSharp  } from "react-icons/io5";

import styles from  '../styles/movieDetailMobile.module.css'
import { Virtual, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const MovieDetailMobile = ({movie}) => {


    const containerStyle = {
        backgroundImage:  `linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0) 40%), url(${movie.image})`,
        backgroundSize: "cover",
    }


    return (
        <section className={styles.container_details_general_mobile}>
        <div className={styles.container_image_details} style={containerStyle} key={movie._id}>
        <div className={styles.container_image_info_top}>
            {/* <button><IoAddSharp/></button> */}
            <a href=""><IoShareSocialSharp/></a>
        </div>
        <div className={styles.container_image_info_bottom}>
            <h1>{movie.title}</h1>
            {/* <p><FaStar/> {movie.rating}/10</p> */}
        </div>
        </div>

        <div className={styles.container_info_movie}>
            <div className={styles.container_info_movie_top}>
                <div className={styles.hours_years_details}>
                    <span>{movie.year}</span>
                    <span> • </span>
                    <span>{movie.duration} min</span>
                </div>
                <div className={styles.genre_detail}>
                    <p>{movie.genre.join(', ')}</p>
                </div>
            </div>

            <div className={styles.director_detail}>
                <h3>Director</h3>
                <p>{movie.director}</p>
            </div>
            
            <div className={styles.container_actors_carousel}>
            <h3>Reparto</h3>
            <Swiper 
              // spaceBetween={8}
                slidesPerView={1.8}
                modules={[Navigation, Pagination]}
                allowTouchMove={true}
                >
                {movie.actors.map((actor, index)=> (
                    <SwiperSlide id={index}>
                    <div className={styles.card_actors}>
                    <article>
                        <img src={actor.image} alt={actor.name} />
                    </article>
                    <p>{actor.name}</p>
                    </div>
                        </SwiperSlide>
                ))}
                </Swiper>
            </div>

            <div className={styles.synopsis_detail}>
                <h3>Sinopsis</h3>
                <p>{movie.synopsis}</p>
            </div>
        </div>
        </section>
        )
}

export default MovieDetailMobile