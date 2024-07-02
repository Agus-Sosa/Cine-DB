// import React, { useState } from 'react'
// import { movies } from '../temp/data';
// import { Input } from '@nextui-org/react';
// import styles from '../styles/searchMovies.module.css'
// import { Link } from 'react-router-dom';

// const SearchMovies = ({movies}) => {
//     const [searchTerm, setSearchTerm ] = useState('');
//     const [suggesteMovies, setSuggestedMovies]= useState([]);

//     const handleInputChange =(event)=> {
//         const inputText = event.target.value;
//         setSearchTerm(inputText);

//         const filteredMovies = movies.filter(movie => 
//             movie.title.toLowerCase().includes(inputText.toLowerCase())
//             );

//             setSuggestedMovies(filteredMovies)

//     }

//   return (
//     <div className={styles.container_search}>
//          <Input
//           classNames={{
//             base: "max-w-full sm:max-w-[20rem] h-10",
//             mainWrapper: "h-full",
//             input: "text-small",
//             inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
//           }}
//           className="bg-gray-800 input_search"
//           style={{width:"0vw", textAlign: "center", fontSize: "18px"}}
//           // width={"500px"}
//           placeholder="Buscar pelicula"
//           size="sm"
//           value={searchTerm}
//           onChange={handleInputChange}
//             // startContent={}
//           type="search"
//         />
//         {searchTerm && suggesteMovies.length > 0 && (
//             <div className={styles.suggest_container}>
//                 <h3>Sugerencias</h3>
//                 <ul>
//                     {suggesteMovies.map(movie =>(
//                         <Link to={`/movie/${movie._id}`}>
//                           <div className={styles.search_result_item}>
//                               <div className={styles.search_result_image_container}>
//                                 <picture>
//                                     <img src={movie.image} alt="" />
//                                 </picture>
//                               </div>
//                               <div className={styles.search_result_details_container}>
//                                     <h5>{movie.title}</h5>
//                                     <span>Fecha: {movie.year}</span>
//                               </div>
//                           </div>
//                         </Link>
//                     ))}
//                 </ul>
//             </div>
//         )}
//     </div>
//     )
// }

// export default SearchMovies

import React, { useState } from 'react'
import { Input } from '@nextui-org/react';
import { Link } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";

import styles from "../styles/searchMovies2.module.css"
const SearchMovies = ({movies}) => {

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
  return (
    <>
    <div className={styles.container}>
      <Input
        color='default'
          
        classNames={{
          
            base: "max-w-full sm:max-w-[20rem] h-10",
            mainWrapper: "h-full",
            input: "text-white",
            inputWrapper: "h-full font-normal text-default-500 bg-default-400/2 dark:bg-default-500/20",
          }}
          className={`bg-gray-800 ${styles.input_search}`}
          style={{width:"30vw", textAlign: "start", fontSize: "18px"}}
          // width={"500px"}
          placeholder="Buscar pelicula"
          size="sm"
          startContent={<FaSearch className={styles.icon_search} style={{fontSize:"2vw", margin: " 0 10px"}}/>}
          value={searchTerm}
          onChange={handleInputChange}
            // startContent={}
          type="search"
        />
      {searchTerm && suggestMovies.length > 0 &&(
        <div className={styles.container_modal_suggest}>
          <h5>Sugerencias</h5>
          <div style={{maxHeight: "19vw", overflowY: "scroll"}} className={styles.container_card_search}>
          {suggestMovies.map((movie)=> (
            <Link to={`/movie/${movie._id}`}>
            <div className={styles.card_movie}>
              {/* <article>
                <img src={movie.image} alt="" />
              </article> */}
              <div style={{backgroundImage: `url(${movie.image})`}} className={styles.image_movie} ></div>
              <div>
                <h6>{movie.title}</h6>
                <p>{movie.year}</p>
              </div>
            </div>
            </Link>
          ))}

          </div>
        </div>
      )}
</div>
    </>
  )
}

export default SearchMovies