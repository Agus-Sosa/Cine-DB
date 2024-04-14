import React, { useEffect, useState } from 'react'
import GenreExplorer from '../GenreExplorer'
import { movies } from '../../temp/data'
import axios from 'axios';
import Loader from '../Loader';

const ExplorerPageContainer = () => {
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
            {genres.map((genre)=> (
                <GenreExplorer key={genre} genre={genre} movies={movies}/>
            ))}
        </section>
        )
}

export default ExplorerPageContainer