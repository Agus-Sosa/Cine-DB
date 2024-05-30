import React, { useEffect, useState } from "react";
import CoverPage from "../CoverPage";
// import MovieList from "../MovieList";
// import { movies } from "../../temp/data";
import styles from '../../styles/HomeContainer.module.css'
import axios from 'axios'
import Loader from "../Loader";
import CarouselCards from "../CarouselCards";
import CatalogMessage from "../CatalogMessage";
import FeaturedMoviePoster from "../featuredMoviePoster";
import { API_URLS } from "../../api/api";
const HomeConainer = () => {
const [loading, setLoading]= useState(true)
const [latestMovies, setLatestMovie] = useState([]);
const [popularMovies, setPopularMovies]= useState([]);
const [topRatedMovies, setTopRatedMovies]= useState([])
const [featuredMovies, setFeaturedMovies] = useState([])
  // const containerStyle = {
  //   backgroundColor: 'rgb(19 19 19)'
  // }
  
  useEffect(()=> {
    const axiosData = async ()=> {
      try {
        const response = await axios.get(API_URLS.GET_MOVIES);
       const allMovies =  response.data.movies;

       const latest = allMovies.filter(movies =>movies.isLatest);
       setLatestMovie(latest);
      

        const popular = allMovies.filter(movies=> movies.isPopular);
      setPopularMovies(popular);

      const topRated = allMovies.filter(movies=>movies.isTopRated);
      setTopRatedMovies(topRated);

      const featured = allMovies.filter(movies=>movies.isFeatured);
      setFeaturedMovies(featured)

    
      } catch (error) {
        console.error(error.message)
      } finally {
        setLoading(false);
      }
    }

    axiosData();
  }, [])

  if(loading) {
    return <Loader/>
  }


  return (
    <>
      <section className={`mx-10 mt-6`}>
      <CoverPage/>
      <div>

      <CarouselCards movies={popularMovies} title={"Destacados"}/>
      <CarouselCards movies={latestMovies} title={"Nuevos Estrenos"}/>
      <FeaturedMoviePoster movies={featuredMovies}/>
      <CarouselCards movies={topRatedMovies} title={"Mejores Peliculas"}/>

      <CatalogMessage/>
      </div>

    </section>
    </>
  )

  // return (
  //   <> 

  //     <div >
  //       <div className="cover-page_desktop_container">
  //       <CoverPage/>
  //       </div>
  //       <div className="cover-page_mobile_container">
  //       <CoverPageMobile/>
  //       </div>

  //         <div className="movie-list_mobile_container">

  //         </div>
          
  //     </div>


  //   </>

  // );
};

export default HomeConainer;
