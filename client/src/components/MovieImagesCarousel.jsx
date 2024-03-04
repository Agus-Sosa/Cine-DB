import React from 'react'
import { Virtual, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import '../styles/movieImageCarousel.css'
import CarouselButtons from './CarouselButtons';
import '../styles/carouselButtons.css'
const MovieImagesCarousel = ({movie}) => {
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
        <div className='container_carousel'>
        <div className='container_nav_carousel_image'>
        <h3 className='images_title'>Imagenes</h3>
        <CarouselButtons onPrevClick={handlePrevClick} onNextClick={handleNextClick}/>
        <div className='container_images_carousel'>
        <Swiper
            ref={swiperRef}
        modules={[Navigation, Virtual, Pagination]}
        slidesPerView={3}
        loopedSlides={true}
        allowTouchMove={true}
        spaceBetween={20}
        navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            }}
        >
            {movie.gallery.map((images, index)=> (
                <SwiperSlide key={index}>
                    <div className='container-images'>
                        <img src={images.url} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
        </div>

        </div>
    </div>
        )
}

export default MovieImagesCarousel