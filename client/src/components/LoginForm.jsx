import React, { useState } from 'react'
import InputComponent from './InputComponent'
import '../styles/registerForm.css'
import { IoLogoFacebook, IoLogoInstagram, IoLogoGoogle } from "react-icons/io";
import { Link } from 'react-router-dom';
import { FaAngleLeft } from "react-icons/fa";


import ImageCarousel from './ImageCarousel'

const LoginForm = () => {


    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    })

    const handleChange = (e)=> {
        const {name, value} = e.target;
        setFormData((prevData)=> ({...prevData, [name]: value}));
    }

    const hanldeSubmit = async(e)=> {
        e.preventDefault();
        try {
            const response =await axios.post("/api/sessions/login", formData, {
                headers:{"Content-Type": 'application/json'},
            })
            const data = response.data

            if(response.status == 200) {
                console.log("Se inicio sesion correctamente", data);
            } else {
                console.error("Error al iniciar sesion", data);
            }

        } catch (error) {
            console.error(`Error al iniciar sesion ${error}`);
        }
    }
    return (
        <section className='container_form'>
            <div className='container_nav_form'>
                <Link to={'/'}>
                 <p><FaAngleLeft />Volver a inicio</p>
                </Link>
            </div>
            <div className='register_container'>
                <div className='form_container'>
                    <h1>¡Bienvenido de Nuevo!</h1>
                    <span>Nos alegra verte de nuevo. Ingresa para continuar tu viaje con nosotros</span>
                    <form onSubmit={hanldeSubmit}>      
                        <InputComponent 
                        label="Correo Electronico"
                        type="email"
                        placeholder="Ingrese un correo electronico"
                        value={formData.email}
                        name="email"
                        onChange={handleChange}
                        
                        />            
                        <InputComponent 
                        label="Contraseña"
                        type="password"
                        placeholder="Ingrese una contraseña"
                        value={formData.password}
                        name="password"
                        onChange={handleChange}
                        
                        />
                        <div className='bottom_form_container'>
                        <a>¿olvidó su contraseña?</a>
                        <button type='submit'>Iniciar Sesion</button>       
                        </div>
                        <div className='container_social_media'>
                            <div className='separator_container'>
                            <span></span>
                            <p>O</p>
                            <span></span>
                            </div>

                            <div className='social_media'>
                            <a href=""><IoLogoFacebook /></a>
                            <a href=""><IoLogoInstagram /></a>
                            <a href=""><IoLogoGoogle/></a>
                            </div>
                        </div>
                        <div className='alredy_account_container'>
                            <p>¿No tienes una cuenta?</p>
                            <Link to={'/register'}><span>Registrarse</span></Link>
                        </div>
                        </form>
                </div>

        <div className='carrousel_register_container'>
        <ImageCarousel/>
        </div>
        </div>
        

        </section>

        )
}

export default LoginForm;