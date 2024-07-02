import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Virtual, Navigation, Pagination } from 'swiper/modules';
import MovieCard from './MovieCard';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import styles from '../styles/carouselCardsMobile.module.css'

const CarouselCardsMobile = ({movies,title}) => {


  if(movies.length == 0) {
    return <div> No existen peliculas</div>
  }

  return (
    <>
    <section className={styles.container_carousel}>
      <h3 className='font-semibold mt-6 mb-3 text-slate-50'>{title}</h3>
      <Swiper
        modules={[Navigation, Pagination, Virtual]}
        slidesPerView={2}
        // spaceBetween={5}
        allowTouchMove={true}
      >
        {movies.map((movie)=> (
            <SwiperSlide key={movie._id}>
              <MovieCard movie={movie}/>
            </SwiperSlide>
        ))}
      </Swiper>
    </section>
    </>
  )
}

export default CarouselCardsMobile