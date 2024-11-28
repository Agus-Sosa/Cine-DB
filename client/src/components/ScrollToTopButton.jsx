import React, { useEffect, useState } from 'react'
import { IoMdArrowDropup } from "react-icons/io";
import styles from '../styles/scrollToTopButton.module.css'
const ScrollToTopButton = () => {
    const [isVisible, setIsVisible]= useState(false)

    const toggleVisibility = () => {
        if(window.scrollY > 300) {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    }

    const scrollToTop = ()=> {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }


    useEffect(()=> {
        window.addEventListener("scroll", toggleVisibility);
        return ()=> {
            window.removeEventListener("scroll", toggleVisibility)
        }
    }, []);

    return (
        <>
        {isVisible && (

        <div className={`${styles.container_arrow} fixed bottom-8 right-8 z-50`}>
                <button onClick={scrollToTop}><IoMdArrowDropup /></button>
        </div>
        
    )}
        </>
    )
}

export default ScrollToTopButton