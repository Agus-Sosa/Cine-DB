import React from 'react'
import GenreExplorer from '../GenreExplorer'
import { movies } from '../../temp/data'

const ExplorerPageContainer = () => {
    const genres = ['Accion', 'Aventura', "Fantasia"]
    return (
        <section>
            {genres.map((genre)=> (
                <GenreExplorer key={genre} genre={genre} movies={movies}/>
            ))}
        </section>
        )
}

export default ExplorerPageContainer