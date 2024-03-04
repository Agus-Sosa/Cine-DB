import React, { useEffect, useState } from 'react'
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css/autoplay'
import '../styles/imageCarrousel.css'

const ImageCarousel = () => {
  const [slides, setSlides] = useState([]);
  // Simula la obtención de datos desde el backend
  useEffect(() => {
    // Aquí puedes hacer una solicitud al backend para obtener los datos
    // y luego actualizar el estado con los datos recibidos
    const fetchDataFromBackend = async () => {
      try {
        // Hacer una solicitud al backend para obtener los datos de las imágenes y textos
        // const response = await tuFuncionParaObtenerDatosDelBackend();
        // const data = response.data; // Ajusta esto según la estructura de tus datos

        // Ejemplo de datos simulados
        const data = [
          { id: 1, imageUrl: 'https://i.pinimg.com/originals/c0/99/9e/c0999e45d3a4a017a4097eb1eb893a72.jpg', text: 'Regístrate para continuar explorando' },
          { id: 2, imageUrl: 'https://w0.peakpx.com/wallpaper/609/869/HD-wallpaper-avatar-2-the-way-of-water-top-35-best-avatar-2-background.jpg', text: 'Otro texto después de unos segundos' },
          // Agrega más objetos para más imágenes
        ];

        setSlides(data);
      } catch (error) {
        console.error('Error al obtener datos del backend:', error);
      }
    };

    fetchDataFromBackend();
  }, []); // Se ejecutará solo una vez al montar el componente

  
  
  return (
    <Swiper
    modules={[Autoplay, Pagination, Navigation]}
    autoplay={{delay: 5000, disableOnInteraction: false}}
    loop={true}
    allowTouchMove={false}
    pagination={{
      dynamicBullets: true,
    }}
    className='image_slider'
    >

    {slides.map((slides)=> (
      <SwiperSlide key={slides.id}>
        <div
          className='slide_content'
          style={{backgroundImage: `url(${slides.imageUrl})`}}
        >         
        <div className="overlay"></div> 
        <p>{slides.text}</p>
        </div>
      </SwiperSlide>
    ))}

    </Swiper>
    )
}

export default ImageCarousel