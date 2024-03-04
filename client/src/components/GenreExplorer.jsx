import React from 'react'
import MovieList from './MovieList';
import MovieListMobile from './MovieListMobile';

const GenreExplorer = ({genre, movies}) => {



  const filteredMovies = movies.filter((movie)=> movie.genre.includes(genre));
  

  console.log(`Películas en ${genre}:`, filteredMovies);







  if( filteredMovies.length === 0){
    return (
      <div>
        <h2>No hay peliculas disponibles en el genero {genre}</h2>
      </div>
    )
  }

  return (
      <>
      <div className='movie-list_desktop_container'>
        <MovieList title={`${genre}`} movies={filteredMovies}/>
      </div>
      <div className='movie-list_mobile_container'>
        <MovieListMobile title={`${genre}`} movies={filteredMovies}/>
      </div>
      </>

    )
}

export default GenreExplorer