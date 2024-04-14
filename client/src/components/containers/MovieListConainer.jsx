import React, { useEffect, useState } from "react";
import CoverPage from "../CoverPage";
import MovieList from "../MovieList";
// import { movies } from "../../temp/data";
import MovieListMobile from "../MovieListMobile";
import '../../styles/movieListContainer.css'
import CoverPageMobile from "../CoverPageMobile";
import axios from 'axios'
import Loader from "../Loader";
const MovieListConainer = () => {
const [loading, setLoading]= useState(true)
const [movies, setMovies] = useState([])

  const containerStyle = {
    backgroundColor: 'rgb(19 19 19)'
  }
  
  useEffect(()=> {
    const axiosData = async ()=> {
      try {
        const response = await axios.get("http://localhost:8080/api/movies/");
        setMovies(response.data.movies)

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

      <div style={containerStyle}>
        <div className="cover-page_desktop_container">
        <CoverPage/>
        </div>
        <div className="cover-page_mobile_container">
        <CoverPageMobile/>
        </div>

          <div className="movie-list_mobile_container">
          <MovieListMobile title="Nuevos Estrenos" movies={movies}/>
          <MovieListMobile title="Populares" movies={movies}/>
          </div>
          <div className="movie-list_desktop_container">
          <MovieList title="Nuevos Estrenos" movies={movies}/>
          <MovieList title="Populares" movies={movies}/>
          </div>
      </div>


    </>

  );
};

export default MovieListConainer;
