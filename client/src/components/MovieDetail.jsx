// import React from 'react';
// import '../styles/movieDetail.css'
// import { FaStar } from "react-icons/fa";
// import { IoShareSocial } from "react-icons/io5";
// // import CarouselButtons from './CarouselButtons';
// import { Virtual, Navigation, Pagination } from 'swiper/modules';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import MovieImagesCarousel from './MovieImagesCarousel';
// import ModalTrailer from './ModalTrailer';

// const MovieDetail = ({ movie }) => {
//   const swiperRef = React.useRef(null);
//   const handlePrevClick = () => {
//     if (swiperRef.current && swiperRef.current.swiper) {
//       swiperRef.current.swiper.slidePrev();
//     }
//   };

//   const handleNextClick = () => {
//     if (swiperRef.current && swiperRef.current.swiper) {
//       swiperRef.current.swiper.slideNext();
//     }
//   };

//   const containerStyle = {
//     backgroundImage: `url(${movie.backgroundImage})`,
//     backgroundSize: "cover",
//   }

//   return (
//     <>
//     <section className='background_details_movie' style={containerStyle} > </section>
//     <section className='container_details_general' key={movie._id}>
//     <section className='container_movie_details'>
//       <div className='container_left_details'>
//           <article>
//               <img src={movie.image} alt="" />
//           </article>
//           <div className='container_rating-share_movie'>
//             <p><FaStar />  {movie.rating}/10</p>
//             <a href=""><IoShareSocial /> Compartir</a>
//           </div>
//           <div className='container_trailer_details'>
//             <ModalTrailer videoUrl={movie.trailerLink} />
//           </div>
//       </div>
//       <div className='container_right_details'>
//           <h2>{movie.title}</h2>
//           <p className='p_synopsis_movie'>{movie.synopsis}</p>
//           <div className='details_property_movie'>
//             <p>
//               Director: <span>{movie.director}</span>
//             </p>
//             <p>
//               Duracion: <span>{movie.duration} min</span>
//             </p><p>
//               Año: <span>{movie.year}</span>
//             </p><p>
//               Genero: <span> {movie.genre.join(', ')} </span>
//             </p>
//           </div>

//           <div className='container_cast_movie'>
//           <div className='top_details_cast'>
//             <h3>Reparto Principal</h3>
//             {/* <CarouselButtons onPrevClick={handlePrevClick} onNextClick={handleNextClick}/> */}
//           </div>

//             <Swiper
//             ref={swiperRef}
//             modules={[Navigation, Virtual, Pagination]}
//               slidesPerView={3}
//               allowTouchMove={true}
//               navigation={{
//                 nextEl: '.swiper-button-next',
//                 prevEl: '.swiper-button-prev',
//               }}
              
//           >
//             {movie.actors.map((actors, index)=> (
//               <SwiperSlide key={movie._id}>
//               <div className='card_cast_container'>
//                 <div className='actor-image-container'>
//                 <img src={actors.image} alt={actors.name} />

//                 </div>
//                 <p>{actors.name}</p>
//               </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
          
//       </div>
//       </div>
//     </section>
//     <section className='container_movie_details-2'>
//         <MovieImagesCarousel movie={movie} />
//     </section>
//     </section>

//     </>
//   );
// };

// export default MovieDetail;

import React from 'react'
import styles from '../styles/movieDetail.module.css'
import { IoTimeOutline } from "react-icons/io5";
import { Virtual, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
const MovieDetail = ({movie}) => {
  return (
    <>
    <section className={styles.container}>

    <div key={movie._id} className={styles.container_movie_details} style={{backgroundImage: `linear-gradient(rgba(0, 2, 0, 0.3), rgba(0, 2, 0, 0.3)), url(${movie.backgroundImage})`}}>
      <div className={styles.container_details_top}>
        <div className={styles.container_left_details}>
        <span className='text-white-400 font-semibold p-1 rounded-md' style={{backgroundColor: "#3D3838"}}>{movie.year}</span>
          <h1>{movie.title}</h1> 
          <p>{movie.synopsis}</p>
        </div>
        <div className={styles.container_right_details}>
          <div className={styles.container_duration}>
            {/* <span><IoTimeOutline />{movie.duration} </span> */}
            {/* <span>{movie.rating}</span> */}
          </div>
          <button>Ver Trailer</button>
        </div>
      </div>
      
      </div>  
      <div className={styles.container_details_bottom}>
        <h3>Mas informacion</h3>
        <div className='my-7'>
          <h4>Director</h4>
          <p>{movie.director}</p>
        </div>
        <div className={styles.container_actors}>
          <h4>Reparto Principal</h4>
          <div className={` mt-3 ${styles.container_actors_carousel}`}>
            <Swiper 
              // spaceBetween={8}
              slidesPerView={5}
              modules={[Navigation, Pagination]}
              allowTouchMove={true}
            >
              {movie.actors.map((actor)=> (
                // <SwiperSlide>
                <div className={styles.card_actors}>
                  <article>
                    <img src={actor.image} alt={actor.name} />
                  </article>
                  <p>{actor.name}</p>
                </div>
                // </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>

    </>
  )
}

export default MovieDetail