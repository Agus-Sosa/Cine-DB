// import React, { useEffect, useState } from 'react'
// import MovieDetail from '../MovieDetail'
// import { useParams } from 'react-router-dom'
// import Loader from '../Loader';
// import MovieDetailMobile from '../MovieDetailMobile';
// import axios from 'axios';
// const MovieDetailContainer = () => {
//   const {idMovie} = useParams();
//   const [movie, setMovie]= useState(null);
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     // Busca la película por su ID en los datos simulados
//     // const selectedMovie = movies.find((m) => m.id === parseInt(idMovie, 10));

//     // if (selectedMovie) {
//     //   setMovie(selectedMovie);
//     // } else {
//     //   console.error('Error: No se encontró la película en los datos simulados.');
//     // }
//     // setTimeout(()=> {
//     //   setLoading(false);
//     // }, 1000);

//     const axiosData = async(idMovie)=> {
//       try {
//         const response = await axios.get(`http://localhost:8080/api/movies/${idMovie}`)
//         setMovie(response.data.getMovie)
//         console.log(response.data.getMovie)
//         setLoading(false)
//       } catch (error) {
//         console.error(error.message)
//       }
//     }

//     axiosData(idMovie)

//   }, []);


//   if(loading){
//     return <Loader/>
//   }



//   return (
//       <>
//         <MovieDetail movie={movie}/>
//         <MovieDetailMobile movie={movie}/>
//       </>

//     )
// }

// export default MovieDetailContainer

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MovieDetail from '../MovieDetail';
import axios, { all } from 'axios';
import Loader from '../Loader';
import GenreExplorer from '../GenreExplorer';
import CarouselCardsContainer from '../CarouselCardsContainer';
import MovieDetailMobile from '../MovieDetailMobile';

const MovieDetailContainer = () => {
  const { idMovie } = useParams();
  const [movie, setMovie] = useState(null);
  const [allMovies, SetAllMovies]= useState([])
  const [loading, setLoading] = useState(true);
  const [loadingAllMovies, setLoadingAllMovies] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/movies/${idMovie}`);
        setMovie(response.data.getMovie);
        setLoading(false);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  }, [idMovie]);


  useEffect(()=> {
    const fetchAllMovieData = async ()=> {
      try {
        const reponse = await axios.get("http://localhost:8080/api/movies/");
        const dataMovie = reponse.data.movies
        SetAllMovies(dataMovie);
        setLoadingAllMovies(false);
        // console.log("Peliculas relacionadas", dataMovie);
      } catch (error) {
        
      }
    }

    fetchAllMovieData();
  }, [])

  if (loading || loadingAllMovies) {
    return <Loader />;
  }

  const relatedMovies = allMovies.filter((relatedMovie) => {
    return relatedMovie._id !== idMovie && relatedMovie.genre.some((genre) => movie.genre.includes(genre));
  });


  return (
      <>
        <MovieDetail movie={movie} />
        <MovieDetailMobile movie={movie}/>
        <div style={{padding: "2vw 4vw 0vw 4vw"}}>

        <CarouselCardsContainer title={"Peliculas Relacionadas"} movies={relatedMovies}/>
        </div>

      </>
  );
};

export default MovieDetailContainer;
