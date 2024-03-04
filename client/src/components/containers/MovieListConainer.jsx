import React, { useEffect, useState } from "react";
import CoverPage from "../CoverPage";
import MovieList from "../MovieList";
import { movies } from "../../temp/data";
import MovieListMobile from "../MovieListMobile";
import '../../styles/movieListContainer.css'
import CoverPageMobile from "../CoverPageMobile";
const MovieListConainer = () => {
const [loading, setLoading]= useState(true)


  const containerStyle = {
    backgroundColor: 'rgb(19 19 19)'
  }
  
  useEffect(()=> {
    setTimeout(()=> {
      setLoading(false)
    }, 2000)
  }, [])


  return (
    <> 
    {/* <div style={containerStyle}>
      <CoverPage />
      {
        window.innerWidth <= 900 ? (
          <>
          <div className="">
          <MovieListMobile title="Nuevos Estrenos" movies={movies}/>
          <MovieListMobile title="Populares"/>
          </div>
          </>
          
        ): (
          <>
          <MovieList title="Nuevos Estrenos" movies={movies}/>
          <MovieList title="Populares" movies={movies}/>
          </>
        )}

      </div> */}

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
