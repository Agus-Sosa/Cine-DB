import React from 'react'
import CarouselCardsContainer from './CarouselCardsContainer';

const GenreExplorer = ({genre, movies}) => {

  console.log("Recibiendo las peliculas antes de filtrar", movies)


  const filteredMovies = movies.filter((movie)=> movie.genre.includes(genre));
  

  console.log(`Películas en ${genre} filtrada:`, filteredMovies);







  // if( filteredMovies.length === 0){
  //   return (
  //     <div>
  //       <h2>No hay peliculas disponibles en el genero {genre}</h2>
  //     </div>
  //   )
  // }

  return (
      <>
      <div>
        <CarouselCardsContainer movies={filteredMovies} title={genre} key={genre}/>
      </div>
      </>

    )
}

export default GenreExplorer;