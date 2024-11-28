import React, { useEffect, useState } from "react";
import CoverPage from "../CoverPage";
import axios from 'axios'
import Loader from "../Loader";
import CatalogMessage from "../CatalogMessage";
import { API_URLS } from "../../api/api";
import CarouselCardsContainer from "../CarouselCardsContainer";
import styles from '../../styles/homeContainer.module.css'
import FeaturedMoviePoster from "../FeaturedMoviePoster";

const HomeConainer = () => {
const [loading, setLoading]= useState(true)
const [latestMovies, setLatestMovie] = useState([]);
const [popularMovies, setPopularMovies]= useState([]);
const [topRatedMovies, setTopRatedMovies]= useState([])
const [featuredMovies, setFeaturedMovies] = useState([])

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
      <section className={`${styles.container_home}`}>
      <CoverPage/>
      <div>

      <CarouselCardsContainer movies={popularMovies} title={"Destacados"}/>
      <CarouselCardsContainer movies={latestMovies} title={"Nuevos Estrenos"}/>
      <FeaturedMoviePoster movies={featuredMovies}/>
      <CarouselCardsContainer movies={topRatedMovies} title={"Mejores Peliculas"}/>

      <CatalogMessage/>
      </div>

    </section>
    </>
  )

};

export default HomeConainer;
