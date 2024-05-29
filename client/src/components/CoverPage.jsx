import { useEffect, useRef, useState } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import { API_URLS } from '../api/api';
import axios from 'axios';
import Loader from './Loader';
import styles from "../styles/coverPage.module.css"
import { Link } from 'react-router-dom';


const CoverPage = () => {
const [frontPageMovie, setFrontPageMovie] = useState(null);
const [loading, setLoading]= useState(true)
const swiperRef = useRef(null);




    const handlePrevClick = ()=> {
        if(swiperRef.current) swiperRef.current.swiper.slidePrev();
    }

    const handleNextClick=()=> {
        if(swiperRef.current) swiperRef.current.swiper.slideNext();
    }

    // const containerStyle = {
    //     backgroundImage:  `linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0) 70%), ${frontPageMovie.image}`
    // }

    useEffect(()=> {
        const axiosData = async() => {
            try {
                const response = await axios.get(API_URLS.GET_MOVIES_FRONT_PAGE);
                setFrontPageMovie(response.data.moviesFrontPage);
                setLoading(false)
            } catch (error) {
                console.error(error.message)
            }
        }

        axiosData();
    },[])


    if(loading) {
        return <Loader/>
    }
    return (
    <Swiper 
            ref={swiperRef}
            pagination={true}
            modules={[Pagination, Navigation]} 
            className="mySwiper"
            navigation={{ prevEl: null, nextEl: null }}
            autoplay={{delay:5000}}
    >
        {
            frontPageMovie.map((movie)=> (
                <SwiperSlide className='relative' key={movie._id}>
                    <div className={`${styles.arrow_carousel} absolute left-0`} onClick={handlePrevClick}><MdKeyboardArrowLeft/></div>
                    <div className={`${styles.arrow_carousel} absolute right-0`} onClick={handleNextClick}><MdKeyboardArrowRight/></div>
                    <div className={styles.container_cover_page} style={{ backgroundImage:  `linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0) 70%), url(${movie.image})` }}>
                        <div className={styles.container_details_movie}>
                            <p className='text-gray-400 font-semibold bg-slate-900 p-1 rounded-md '>{movie.year}</p>
                            <h1>{movie.title}</h1>
                            {/* <p className={styles.p_description}>{movie.description}</p> */}
                            <div className={styles.container_buttons}>
                                <Link to={`/movie:${frontPageMovie.link}`}>
                                <button className={`${styles.button_info} bg-inherit border-gray-600 text-gray-300 rounded-xl p-3 flex items-center text-center border-2 transition-all font-semibold  border-solid` }>Mas informacion <MdKeyboardArrowRight  className='mx-2 text-2xl'/></button>
                                </Link>
                            </div>  
                        </div>
                    </div>
                </SwiperSlide>
            ))
        }
      </Swiper>    )
}

export default CoverPage