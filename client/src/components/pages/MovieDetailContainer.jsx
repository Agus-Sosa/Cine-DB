import React, { useEffect, useState } from 'react'
import MovieDetail from '../MovieDetail'
import { useParams } from 'react-router-dom'
import Loader from '../Loader';
import MovieDetailMobile from '../MovieDetailMobile';
import axios from 'axios';
const MovieDetailContainer = () => {
  const {idMovie} = useParams();
  const [movie, setMovie]= useState(null);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Busca la película por su ID en los datos simulados
    // const selectedMovie = movies.find((m) => m.id === parseInt(idMovie, 10));

    // if (selectedMovie) {
    //   setMovie(selectedMovie);
    // } else {
    //   console.error('Error: No se encontró la película en los datos simulados.');
    // }
    // setTimeout(()=> {
    //   setLoading(false);
    // }, 1000);

    const axiosData = async(idMovie)=> {
      try {
        const response = await axios.get(`http://localhost:8080/api/movies/${idMovie}`)
        setMovie(response.data.getMovie)
        console.log(response.data.getMovie)
        setLoading(false)
      } catch (error) {
        console.error(error.message)
      }
    }

    axiosData(idMovie)

  }, []);


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