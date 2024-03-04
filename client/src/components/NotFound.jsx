import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/notFound.css'
const NotFound = () => {
  return (
    <>
    <div className='container_page_404'>
        <div className='container_text'>
            <h1>404</h1>
            <p>La Fuerza no está fuerte en esta página. Darth Vader ha alterado el flujo del código. Regresa al lado luminoso, vuelve a la página principal y que la Fuerza te acompañe</p>
            <Link to={'/'}>
            <button>Volver a inicio</button>
            </Link>
        </div>
        <div className='container_picture'>
        <div className='container_image'>
            <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4ecf6bb3-e5c2-49aa-8300-365ddf7e83fa/df82mav-93f48317-0773-4787-83c7-5aceca804d6d.png/v1/fill/w_1280,h_1020/darth_vader_png_by_kevingame_2_df82mav-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyMCIsInBhdGgiOiJcL2ZcLzRlY2Y2YmIzLWU1YzItNDlhYS04MzAwLTM2NWRkZjdlODNmYVwvZGY4Mm1hdi05M2Y0ODMxNy0wNzczLTQ3ODctODNjNy01YWNlY2E4MDRkNmQucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.kNJRokty4yZSpeoPsWUz-_4oDOoZGQUvY2ShKURmKJ4" alt="" />
            <div className='sable_luz'></div>
        </div>
        </div>
    </div>
    </>
    )
}

export default NotFound