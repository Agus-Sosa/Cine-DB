import React, { useEffect, useState } from 'react'
import MovieDetail from '../MovieDetail'
import { useParams } from 'react-router-dom'
import { movies } from '../../temp/data';
import Loader from '../Loader';
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


  // if(!movie){
  //   return <h1>Cargando</h1>
  // }


  const containerStyle = {
    backgroundImage: `url(${movie.backgroundImage})`,
    backgroundSize: "cover",
    padding: "300px 250px 0px 250px"
  }

  return (
    <section style={containerStyle}>
      <MovieDetail movie={movie}/>
    </section>
    )
}

export default MovieDetailContainer