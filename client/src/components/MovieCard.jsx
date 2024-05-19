import React from 'react'
import styles from '../styles/movieCard.module.css'
import { Link } from 'react-router-dom'
const MovieCard = ({movie}) => {


  return (
    <Link to={`/movie/${movie._id}`}>
    <div className={styles.container_movie_card} style={{ backgroundImage:  `linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0) 70%), url(${movie.image})` }}>
      <div className={styles.container_details}>
        <h4>{movie.title}</h4>
        <div className={`${styles.container_genre}  flex`} key={movie}>
          {movie.genre.map((genre)=> (
            <div className='bg-slate-900 mt-2'>{genre}</div>
          ))}
        </div>
      </div>
    </div>
    </Link>
  )
}

export default MovieCard