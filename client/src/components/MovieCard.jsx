import React from 'react'

const MovieCard = ({movie}) => {
  return (
    <div>
      <article className='w-64 overflow-hidden'>
        <img  className='h-96' width="100%" src={movie.image} alt="" />
      </article>
      <p>{movie.title}</p>
      <p>{movie.year}</p>
    </div>
  )
}

export default MovieCard