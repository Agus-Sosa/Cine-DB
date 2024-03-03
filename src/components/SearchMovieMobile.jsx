import { Button, Input } from '@nextui-org/react';
import React, { useState } from 'react'
import { IoSearch } from "react-icons/io5";
import '../styles/searchMoviesMobile.css'
import { Link } from 'react-router-dom';
const SearchMovieMobile = ({movies}) => {
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

    const containerStyle = {

        backgroundColor: "#131313",
        top: "10%",
        position: "absolute"
    }

    return (
    <>
    <div className='container_search_mobile'>

    <Button  onClick={()=>document.getElementById('my_modal_2').showModal()}><IoSearch className='text-2xl'/></Button>
    <dialog id="my_modal_2" className="modal ">
        <div className="modal-box " style={containerStyle}>
        <h3 className="font-bold text-lg">Buscar pelicula</h3>
        <div className='container_search_result_mobile'>

        <Input
        className='mt-5 input_modal'
        variant="bordered"
        type='search'
        placeholder="Buscar pelicula"
        value={searchTerm}
        onChange={handleInputChange}
        />

        {searchTerm && suggesteMovies.length > 0 && (
            <div className='suggest_container_mobile'>
                <h4>Sugerencias</h4>
                <ul>
                    {suggesteMovies.map(movie =>(
                        <Link  onClick={()=> document.getElementById('my_modal_2').close()} to={`/movie/${movie.id}`}>
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

        </div>
        <form method="dialog" className="modal-backdrop">
        <button>close</button>
        </form>
    </dialog>
    </div>

    </>


)
}

export default SearchMovieMobile