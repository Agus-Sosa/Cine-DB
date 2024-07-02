import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/catalogMessage.module.css'
const CatalogMessage = () => {
    return (
        <>
            <div className={`flex flex-col text-center items-center ${styles.container} `}>
                <picture className='w-80'>
                    <img src="https://www.pngplay.com/wp-content/uploads/2/Deadpool-Chibi-Transparent-Free-PNG.png" alt="" />
                </picture>
                <div className={`text-slate-100 font-semibold text-xl ${styles.container_text}`}>
                    <p>¿Sigues buscando algo que ver?</p>
                    <p>Revisa todo nuestro catálogo</p>
                </div>
                <Link to={'/explorar'} className={`py-2 px-6 mt-6 font-bold rounded-lg text-lg ${styles.link_explorer}`} style={{color: "#cb0303", border:"#cb0303 solid 3px"}}>Explorar</Link>
            </div>
        </>
    )
}

export default CatalogMessage