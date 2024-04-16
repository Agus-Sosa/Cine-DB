import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Virtual, Navigation, Pagination } from 'swiper/modules';


import 'swiper/css/navigation';
import MovieCard from './MovieCard';
import '../styles/movieList.css';
import CarouselButtons from './CarouselButtons';

const MovieList = ({ title, movies}) => {
  const swiperRef = React.useRef(null);

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
    <div className="container_list">
      <div className="top_list_container">
        <div>
        <h2>{title}</h2>
        </div>
        
        <CarouselButtons onPrevClick={handlePrevClick} onNextClick={handleNextClick}/>
      </div>
      <Swiper
      ref={swiperRef}
      modules={[Navigation, Virtual, Pagination]}
        slidesPerView={3}
        width={1100}
        // loop={true}

        spaceBetween={60}
        allowTouchMove={false}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie._id}>
            <MovieCard movie={movie} />
            {console.log(movies, "movies")}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MovieList;
