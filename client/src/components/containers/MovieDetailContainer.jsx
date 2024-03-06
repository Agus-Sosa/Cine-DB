import React, { useEffect, useState } from 'react'
import MovieDetail from '../MovieDetail'
import { useParams } from 'react-router-dom'
import { movies } from '../../temp/data';
import Loader from '../Loader';
import MovieDetailMobile from '../MovieDetailMobile';
const MovieDetailContainer = () => {
  const {idMovie} = useParams();
  const [movie, setMovie]= useState(null);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Busca la película por su ID en los datos simulados
    const selectedMovie = movies.find((m) => m.id === parseInt(idMovie, 10));

    if (selectedMovie) {
      setMovie(selectedMovie);
    } else {
      console.error('Error: No se encontró la película en los datos simulados.');
    }
    setTimeout(()=> {
      setLoading(false);
    }, 1000);

  }, [idMovie]);


  if(loading){
    return <Loader/>
  }



  return (
      <>
        <MovieDetail movie={movie}/>
        <MovieDetailMobile movie={movie}/>
      </>

    )
}

export default MovieDetailContainer