import React from 'react'
import '../styles/movieListMobile.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Virtual, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import CardMovie from './CardMovie';

const MovieListMobile = ({title, movies}) => {
    return (
        <div className="container_list_mobile">
        <div className="top_list_container_mobile">
            <div>
            <h2>{title}</h2>
            </div>
        </div>
        <Swiper
            
            modules={[Navigation, Virtual, Pagination]}
            slidesPerView={2}
            // width={1000}
            spaceBetween={10}
            allowTouchMove={true}
            navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            }}
        >
            {movies && movies.map((movie) => (
        <SwiperSlide key={movie._id}>
        <CardMovie movie={movie} />
        </SwiperSlide>
    ))}
        </Swiper>
    </div>
        )
}

export default MovieListMobile