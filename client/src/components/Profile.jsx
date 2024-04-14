// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
import { useAuth } from '../context/AuthContext';
// import InputComponent from './InputComponent';
// import { FaAngleLeft, FaCamera  } from "react-icons/fa";
// import '../styles/profile.css'
// import { Tooltip } from '@nextui-org/react';

const Profile = () => {
//   const {user}= useAuth()

    console.log("user profile", useAuth().user)
//   const [formData, setFormData] = useState({
//     user_name: user ? user.user_name: "Sin nombre",
//     email: user ? user.email : "sin email",
//     password: '',
//     avatar: user ? user.avatar : "https://static.vecteezy.com/system/resources/previews/009/292/244/original/default-avatar-icon-of-social-media-user-vector.jpg"
// })

// const handleChange = (e)=> {
//     const {name, value} = e.target;
//     setFormData((prevData)=> ({...prevData, [name]: value}));
// }

//   return (
//   <>
//       <Link to={'/'} className='flex'>
//           <div className='container_navbar'>
//           <FaAngleLeft/>
//           </div>
//           </Link>
//       <section className='container_account'>
//       <div className='header_account'>
//             <h2>Cuenta</h2>
//         </div>
        
//         <div className='container_details_account'>
        
//             <form action="">
//             <div className='container_image'>
//             <article>
//                 <img src={formData.avatar} alt="" />
//                 <Tooltip content="Cambiar avatar" className='tooltip rounded-lg	text-white bg-red-800 p-3	' closeDelay={100} >
//                 <button className='button_change_avatar'><FaCamera /></button>
//                 </Tooltip>
//             </article>
//             </div>
//             <InputComponent 
//                         label="Nombre de usuario"
//                         type="text"
//                         placeholder="Ingrese un nombre de usuario"
//                         value={formData.user_name}
//                         name="user_name"
//                         onChange={handleChange}
                        
//                         />    
//             <InputComponent 
//                         label="Correo Electronico"
//                         type="text"
//                         placeholder="Ingrese un nombre de usuario"
//                         value={formData.email}
//                         name="user_name"
//                         onChange={handleChange}
                        
//                         />   
//             <InputComponent 
//                         label="Contraseña"
//                         type="text"
//                         placeholder="Ingrese un nombre de usuario"
//                         value={formData.password}
//                         name="user_name"
//                         onChange={handleChange}
                        
//                         />    
//               <div className='buttons-container'>
//                     <button disabled  className='save_changes_button'>Guardar Cambios</button>
//                     <button className='logout_button'>Cerrar Sesion</button>
//               </div>
//             </form>
//         </div>
//       </section>
//   </>
    
//   );
  
};

export default Profile;
