import React, { useEffect, useState } from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem , Input} from "@nextui-org/react";
import { Link as NextUILink } from "@nextui-org/react";
import SearchMovies from "./SearchMovies";
import axios from "axios";
import styles from '../styles/navBar.module.css'
import SearchMoviesMobile from "./SearchMoviesMobile";
import { IoMdClose, IoMdSearch } from "react-icons/io";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [movies, setMovies] = useState();
  const [searchModalOpen, setSearchModalOpen] = useState(false)



  useEffect(()=> {
    const axiosData = async()=> {
      try {
        const response = await axios.get("http://localhost:8080/api/movies/");
        setMovies(response.data.movies);
      
      } catch (error) {
        console.error(error.message);
      }
    }
    axiosData();
  },[])

  const toggleModal = ()=> {
    setSearchModalOpen(prev => !prev)
  }


  const menuItems = [
    "Inicio",
    "Explorar",
    "Cerrar Sesion"
  ];

  return (
    <>
    <Navbar style={{zIndex:10000000, background: "#222121"}}  className="relative" onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <ReactRouterLink to={'/'}>
        <NavbarBrand>
          <p className="font-bold text-inherit">CineDB</p>
        </NavbarBrand>
        </ReactRouterLink>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <ReactRouterLink to={'/'}>
        <NavbarItem>
          <NextUILink className="text-slate-200" >
            Inicio
          </NextUILink>
        </NavbarItem>
        
        </ReactRouterLink>
        <ReactRouterLink to={'/generos'}>
        <NavbarItem isActive className={styles.explore_button}>
          <NextUILink>
            Generos
          </NextUILink>
        </NavbarItem>
        </ReactRouterLink>  
        <ReactRouterLink to={'/explorar'}>
        <NavbarItem isActive className={styles.explore_button}>
          <NextUILink>
            Explorar
          </NextUILink>
        </NavbarItem>
        </ReactRouterLink>  
      
      </NavbarContent>
      
      <NavbarContent justify="end">
      <SearchMovies movies={movies}/>
      <button className={styles.button_open_modal} onClick={toggleModal}>
        {searchModalOpen ? <IoMdClose className={styles.icon_modal}/> : <IoMdSearch className={styles.icon_modal}/>}
      </button>
      <SearchMoviesMobile movies={movies} isOpen={searchModalOpen} onClose={toggleModal}/>

      </NavbarContent>
  
      <NavbarMenu className={`bg-transparent p-5`}>
      <ReactRouterLink to={'/'}>
        <NavbarItem>Inicio</NavbarItem>
      </ReactRouterLink>

      <ReactRouterLink to={'/explorar'}>
        <NavbarItem>Explorar</NavbarItem>
      </ReactRouterLink>

      <ReactRouterLink to={"/generos"}>
        <NavbarItem>Generos</NavbarItem>
      </ReactRouterLink>

      </NavbarMenu>

    </Navbar>
    </>
  );
};

export default NavBar;
