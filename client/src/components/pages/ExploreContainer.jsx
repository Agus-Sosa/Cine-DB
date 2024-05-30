import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { API_URLS } from '../../api/api';
import styles from '../../styles/explorerContainer.module.css';
import MovieCard from '../MovieCard';
import { FaCaretDown } from "react-icons/fa";
import Loader from '../Loader';
import {Fade} from 'react-awesome-reveal'


const ExploreContainer = () => {
const [movies, setMovies]= useState([]);
const [filteredMovies, setFilteredMovies] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('');
  const [isLoading,setIsLoading] = useState(true)
  const [orderYears, setOrderYears] = useState("desc")
const genres = ['Accion', 'Fantasia', "Aventura", "Suspenso"]


      useEffect(()=> {
        const axiosData = async()=> {
          try {
            const response = await axios.get(API_URLS.GET_MOVIES);
            setMovies(response.data.movies);
            setFilteredMovies(response.data.movies);
          } catch (error) {
            console.error('Error fetching movies:', error);
          } finally {
            setIsLoading(false);
          }
        }

        axiosData();
      }, [])

      useEffect(() => {
        if (!movies.length) return 
          setFilteredMovies(movies);

          let filtered = movies;
          console.log(filtered)
          if(selectedGenre){

          filtered = filtered.filter((movie) =>
            movie.genre && movie.genre.some((genre) => genre === selectedGenre)
        );
      }

      filtered =filtered.sort((a,b)=> {
        if(orderYears === "asc") {
          return a.year - b.year;
        } else {
          return b.year - a.year
        }
      })

          setFilteredMovies(filtered);
        
      }, [selectedGenre, movies, orderYears]);
    
      const handleGenreChange = (genre) => {
        setSelectedGenre(genre);
      };
      
  const handleSortOrderChange = (order) => {
    setOrderYears(order);
  };
      
  return (
    <>
    <section className={styles.contaner_explore_principal}>
      <div className={styles.header_explorer}>
        <h1>Explorar</h1>
        <div className={styles.container_filter}>
        {isLoading ? (
          <Loader/>
          ) : (
            <>
              <div className="dropdown">
                <div tabIndex={0} role="button" className="btn m-1 mx-7 ">
                  Buscar por genero <FaCaretDown />
                </div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                  <li>
                    <p onClick={() => handleGenreChange("")}>Todos</p>
                  </li>
                  {genres.map((genre) => (
                    <li key={genre}>
                      <p onClick={() => handleGenreChange(genre)}>{genre}</p>
                    </li>
                  ))}
                </ul>
              </div>
                
              <div className="dropdown">
                <div tabIndex={0} role="button" className="btn m-1">Ordenar por año <FaCaretDown /></div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                  <li><p onClick={()=> handleSortOrderChange("asc")}>Mas recientes</p></li>
                  <li><p onClick={()=> handleSortOrderChange("desc")}>Mas antiguo</p></li>
                </ul>
              </div>
              </>

            )}
        </div>
      </div>
      <div className={styles.container_cards}>
        <Fade cascade>
        {filteredMovies.map((movie)=> (
          <MovieCard movie={movie} key={movie._id} className={styles.movie_card}/>
        ))}
        </Fade>
      </div>
    </section>
    </>
)
}

export default ExploreContainer