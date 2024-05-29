import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { API_URLS } from '../../api/api';
import styles from '../../styles/explorerContainer.module.css';
import MovieCard from '../MovieCard';
import { FaCaretDown } from "react-icons/fa";
import Loader from '../Loader';


const ExploreContainer = () => {
const [movies, setMovies]= useState([]);
const [filteredMovies, setFilteredMovies] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('');
  const [isLoading,setIsLoading] = useState(true)
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
        if (selectedGenre === '') {
          setFilteredMovies(movies);
        } else {
          const filtered = movies.filter((movie) =>
            movie.genre && movie.genre.some((genre) => genre === selectedGenre)
        );
          setFilteredMovies(filtered);
        }
      }, [selectedGenre, movies]);
    
      const handleGenreChange = (genre) => {
        setSelectedGenre(genre);
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
            )}
        </div>
      </div>
      <div className={styles.container_cards}>
        {filteredMovies.map((movie)=> (
          <MovieCard movie={movie} key={movie._id} className={styles.movie_card}/>
        ))}
      </div>
    </section>
    </>
)
}

export default ExploreContainer