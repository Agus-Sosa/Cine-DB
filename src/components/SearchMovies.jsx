import React, { useState } from 'react'
import { movies } from '../temp/data';
import { Input } from '@nextui-org/react';
import '../styles/searchMovies.css'
import { Link } from 'react-router-dom';

const SearchMovies = ({movies}) => {
    const [searchTerm, setSearchTerm ] = useState('');
    const [suggesteMovies, setSuggestedMovies]= useState([]);

    const handleInputChange =(event)=> {
        const inputText = event.target.value;
        setSearchTerm(inputText);

        const filteredMovies = movies.filter(movie => 
            movie.title.toLowerCase().includes(inputText.toLowerCase())
            );

            setSuggestedMovies(filteredMovies)

    }

  return (
    <div className='container_search'>
         <Input
          classNames={{
            base: "max-w-full sm:max-w-[20rem] h-10",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
          }}
          className="bg-gray-800 input_search"
          placeholder="Buscar pelicula"
          size="sm"
          value={searchTerm}
          onChange={handleInputChange}
            // startContent={}
          type="search"
        />
        {searchTerm && suggesteMovies.length > 0 && (
            <div className='suggest_container'>
                <h3>Sugerencias</h3>
                <ul>
                    {suggesteMovies.map(movie =>(
                        <Link to={`/movie/${movie.id}`}>
                          <div className='search_result_item'>
                              <div className='search-result_image_container'>
                                <picture>
                                    <img src={movie.image} alt="" />
                                </picture>
                              </div>
                              <div className='search-result_details_container'>
                                    <h5>{movie.title}</h5>
                                    <span>Fecha: {movie.year}</span>
                              </div>
                          </div>
                        </Link>
                    ))}
                </ul>
            </div>
        )}
    </div>
    )
}

export default SearchMovies