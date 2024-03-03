import React from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import '../styles/carouselButtons.css'
const CarouselButtons = ({onPrevClick, onNextClick}) => {
    return (
    <div className="carrousel_buttons">
        <button onClick={onPrevClick}><MdChevronLeft /></button>
        <button onClick={onNextClick}><MdChevronRight/></button>
    </div>
        )
}

export default CarouselButtons