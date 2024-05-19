import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Virtual, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import MovieCard from './MovieCard';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import styles from '../styles/CarouselCards.module.css'


const CarouselCards = ({movies, title}) => {
    const swiperRef = useRef(null);




    const handlePrevClick = ()=> {
        if(swiperRef.current) swiperRef.current.swiper.slidePrev();
    }

    const handleNextClick=()=> {
        if(swiperRef.current) swiperRef.current.swiper.slideNext();
    }

    return (
        <>
        {movies.length > 0 ? (

     
        <section className='mb-24'>
            <h3 className='text-2xl font-semibold mt-6 mb-3 text-slate-50'>{title}</h3>
            <div className='relative'>
            <div onClick={handlePrevClick} className={`${styles.arrow_carousel} absolute left-0`}><MdKeyboardArrowLeft /></div>
            <Swiper
            // loop={true}
            ref={swiperRef}
            modules={[Navigation, Pagination, Virtual]}
            slidesPerView={4}
            
            allowTouchMove={false}
            // centeredSlides={true}
            navigation={{ prevEl: null, nextEl: null }}
            >
            {movies.map((movie)=> (
                <SwiperSlide key={movie._id}>
                    <MovieCard movie={movie}/>
                </SwiperSlide>
            ))}
            </Swiper>
            <div onClick={handleNextClick} className={`${styles.arrow_carousel} absolute right-0`}><MdKeyboardArrowRight/></div>
            </div>

        </section>
        
    ): (
        <div className={styles.not_movie_message}>No existen peliculas</div>
    )
}
</>
    )
}

export default CarouselCards