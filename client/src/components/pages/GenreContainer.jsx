import React, { useEffect, useState } from 'react'
import GenreExplorer from '../GenreExplorer'
import axios from 'axios';
import Loader from '../Loader';
import styles from '../../styles/genreContainer.module.css'
import { API_URLS } from '../../api/api.js';
const GenreContainer = () => {
    const [movies, setMovies] = useState([]);
    const genres = ['Accion', 'Aventura', "Fantasia", "Suspenso"]
    const [loading, setLoading]= useState(true)
    
    useEffect(()=> {
        const axiosData = async() => {
            try {
                const response = await axios.get(API_URLS.GET_MOVIES);
                setMovies(response.data.movies);
                setLoading(false)
            } catch (error) {
                console.error(error.message)
            }
        }

        axiosData();
    },[])


    if(loading) {
        return <Loader/>
    }


    return (
        <>
        <section>
            <div className={styles.header_genre_container}>
                <h1>Generos</h1>
                <p>Explora nuestra selección de películas de diversos géneros para encontrar tu próxima aventura cinematográfica</p>
            </div>
            <div className={styles.container_movie_carousel} style={{margin: "3vw"}}>
                {genres.map((genre)=> (
                    <GenreExplorer key={genre} genre={genre} movies={movies} />
                ))}
            </div>
        </section>
        </>
    )

    // return (
    //     <section>
    //         <div className='title_genere flex flex-col items-center p-10  '>
    //             <h2 className='text-white text-3xl h2_genre'>Generos</h2>
    //             <p className='text-gray-400'>Explora películas por género. Acción, Fantasia y Mas. Encuentra tus favoritas fácilmente.</p>
    //         </div>
    //         <div className='header_genere'>

    //         </div>
    //         {genres.map((genre)=> (
    //             <GenreExplorer key={genre} genre={genre} movies={movies}/>
    //         ))}
    //     </section>
    //     )
}

export default GenreContainer