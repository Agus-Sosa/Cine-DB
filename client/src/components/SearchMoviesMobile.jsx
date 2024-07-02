
import React, { useState } from 'react'
import styles from '../styles/searchMobile.module.css'
import { Link } from 'react-router-dom';
const SearchMoviesMobile = ({movies, isOpen, onClose}) => {

    const [searchTerm, setSearchTerm ] = useState('');
    const [suggestMovies, setSuggestedMovies]= useState([]);
    const handleInputChange =(event)=> {
        const inputText = event.target.value;
        setSearchTerm(inputText);
        const filteredMovies = movies.filter(movie => 
            movie.title.toLowerCase().includes(inputText.toLowerCase())
            );
            setSuggestedMovies(filteredMovies)
      }

      if(!isOpen) return null;


    return (
        <>
        <button onClick={onClose}></button>
        <section className={styles.container}>
            {/* <section className={styles.container_input}> */}
            <input type="text" name="" id="" value={searchTerm} onChange={handleInputChange} placeholder='Buscar una pelicula'/>
            {searchTerm && suggestMovies.length > 0 && (
                <div className={styles.container_suggest_movies}>
                    <h6>Sugerencias</h6>
                    {suggestMovies.map((movie)=> (
                        <Link to={`/movie/${movie._id}`} onClick={onClose}>
                        <div className={styles.card_movies}>
                            <h5>{movie.title}</h5>
                        </div>
                        </Link>
                    ))}
                </div>
            )}
            {/* </section> */}
        </section>

        </>
    )
}

export default SearchMoviesMobile