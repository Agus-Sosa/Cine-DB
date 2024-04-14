import React, { useState } from 'react'
import InputComponent from './InputComponent'
import '../styles/registerForm.css'
import { IoLogoFacebook, IoLogoInstagram, IoLogoGoogle } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';
import { FaAngleLeft } from "react-icons/fa";
import axios from 'axios';
import { API_URL } from '../utils/config';

import ImageCarousel from './ImageCarousel'
import { useAuth } from '../context/AuthContext';

const RegisterForm = () => {
    const navigate = useNavigate();
    const {signUp} = useAuth();

    const [formData, setFormData] = useState({
        user_name: '',
        email: '',
        password: '',
    })


    const handleChange = (e)=> {
        const {name, value} = e.target;
        setFormData((prevData)=> ({...prevData, [name]: value}));
    }

    const hanldeSubmit = async(e)=> {
        e.preventDefault();
        // try {
        
        //     const response =await axios.post('http://localhost:8080/api/sessions/register', formData, {
        //     })
        
        //     const data = response.data
        //     if(data.success){
        //         alert(`Se registro con exito`)
        //         signUp(data.user);
        //         console.log("usuario creado", data.user);
        //         navigate("/login")

        //     }

        // } catch (error) {
        //     console.log(error)
        // }

        try {
            await signUp(formData);
            navigate("/login");
        } catch (error) {
            console.error(`Error al crearse el usuario ${error}`);
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
                    <form onSubmit={hanldeSubmit} method='post' encType='multipart/form-data'>
                        <InputComponent 
                        label="Nombre de usuario"
                        type="text"
                        placeholder="Ingrese un nombre de usuario"
                        value={formData.user_name}
                        name="user_name"
                        onChange={handleChange}
                        
                        />            
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
                        <button type='submit'>Registrarse</button>       
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
                            <p>¿Ya tienes una cuenta?</p>
                            <Link to={'/login'}><span>Iniciar Sesion</span></Link>
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

export default RegisterForm