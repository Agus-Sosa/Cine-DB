import React, {useRef}  from 'react'
import '../styles/movieListMobile.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Virtual, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import CardMovie from './CardMovie';
import CarouselButtons from './CarouselButtons';

const MovieListMobile = ({title, movies}) => {
    const swiperRef = useRef(null);

  const handlePrevClick = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNextClick = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };


    return (
        <div className="container_list_mobile">
        <div className="top_list_container_mobile">
            <div>
            <h2>{title}</h2>
            </div>
        </div>
        <Swiper
            ref={swiperRef}
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
        <SwiperSlide key={movie.id}>
        <CardMovie movie={movie} />
        </SwiperSlide>
    ))}
        </Swiper>
    </div>
        )
}

export default MovieListMobile