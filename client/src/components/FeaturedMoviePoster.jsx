import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Scrollbar, Autoplay } from 'swiper/modules';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import styles from '../styles/featuredMoviePoster.module.css'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import { Link } from 'react-router-dom';

const FeaturedMoviePoster = ({movies}) => {
  const swiperRef = useRef(null);

  

  const handlePrevClick = ()=> {
    if(swiperRef.current) swiperRef.current.swiper.slidePrev();
}

const handleNextClick=()=> {
    if(swiperRef.current) swiperRef.current.swiper.slideNext();
}

  return (
    <section className={styles.container_featured}>
      <h3 className='mb-4'>Recomendados para ti</h3>
      <Swiper
      ref={swiperRef}
      pagination={true}
      loop={true}
      scrollbar={{hide: true}}
      modules={[Navigation, Scrollbar]} 
      className="mySwiper"
      navigation={{ prevEl: null, nextEl: null }}
      // autoplay={{delay:3500, disableOnInteraction: false }}
      
      >
        {movies.map((movie)=> (
          <SwiperSlide className='relative' key={movie._id}>
                    <div className={`${styles.arrow_carousel} absolute left-0`} onClick={handlePrevClick}><MdKeyboardArrowLeft/></div>
                    <div className={`${styles.arrow_carousel} absolute right-0`} onClick={handleNextClick}><MdKeyboardArrowRight/></div>
              <div className={styles.container_movie_poster} style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${movie.backgroundImage})`}}>
                <div className={styles.container_details_poster}>

                <div className={styles.movie_image}>
                  <picture>
                    <img src={movie.image} alt={movie.title} />
                  </picture>
                </div>

                <div className={`${styles.container_details_movie} flex flex-col items-start`} >
                  <p className={`text-gray-400 font-semibold bg-slate-900 p-1 rounded-md ${styles.year}`}>{movie.year}</p>
                  <h4>{movie.title}</h4>
                  <div className={styles.container_buttons}>
                  {/* <button className={styles.button_trailer}>Ver trailer</button> */}
                  <Link to={`/movie/${movie._id}`}>
                      <button className={` ${styles.button_info} ` }>Mas informacion <MdKeyboardArrowRight  className='mx-2 text-2xl'/></button>
                  </Link>                  
                  </div>
                  <p className={`text-white ${styles.synopsis}`}>{movie.synopsis}</p>

              
                </div>
                </div>

              </div>

          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  )
}

export default FeaturedMoviePoster;