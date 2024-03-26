import React, { useEffect, useState } from 'react'
import GenreExplorer from '../GenreExplorer'
import { movies } from '../../temp/data'
import axios from 'axios';

const ExplorerPageContainer = () => {
    const [movies, setMovies] = useState([]);
    const genres = ['Accion', 'Aventura', "Fantasia"]
    
    useEffect(()=> {
        const axiosData = async() => {
            try {
                const response = await axios.get("http://localhost:8080/api/movies/");
                setMovies(response.data.movies);
            } catch (error) {
                console.error(error.message)
            }
        }

        axiosData();
    },[])


    return (
        <section>
            {genres.map((genre)=> (
                <GenreExplorer key={genre} genre={genre} movies={movies}/>
            ))}
        </section>
        )
}

export default ExplorerPageContainer