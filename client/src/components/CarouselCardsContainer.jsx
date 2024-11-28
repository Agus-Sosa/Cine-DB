import React from 'react'
import CarouselCardsMobile from './CarouselCardsMobile';
import CarouselCardsDesktop from './CarouselCardsDesktop';

const CarouselCardsContainer = ({movies, title}) => {
    const isMobile = window.innerWidth <= 768;

    if(isMobile) {
        return  <CarouselCardsMobile movies={movies} title={title}/>
    } else {
        return <CarouselCardsDesktop movies={movies} title={title}/>
    }

}

export default CarouselCardsContainer;