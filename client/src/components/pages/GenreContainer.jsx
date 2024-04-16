import React, { useEffect, useState } from 'react'
import GenreExplorer from '../GenreExplorer'
import { movies } from '../../temp/data'
import axios from 'axios';
import Loader from '../Loader';
import '../../styles/genreExplorerContainer.css'
const GenreContainer = () => {
    const [movies, setMovies] = useState([]);
    const genres = ['Accion', 'Aventura', "Fantasia"]
    const [loading, setLoading]= useState(true)
    
    useEffect(()=> {
        const axiosData = async() => {
            try {
                const response = await axios.get("http://localhost:8080/api/movies/");
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
        <section>
            <div className='title_genere flex flex-col items-center p-10  '>
                <h2 className='text-white text-3xl h2_genre'>Generos</h2>
                <p className='text-gray-400'>Explora películas por género. Acción, Fantasia y Mas. Encuentra tus favoritas fácilmente.</p>
            </div>
            <div className='header_genere'>

            </div>
            {genres.map((genre)=> (
                <GenreExplorer key={genre} genre={genre} movies={movies}/>
            ))}
        </section>
        )
}

export default GenreContainer