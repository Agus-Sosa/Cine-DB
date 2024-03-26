import React, { useEffect, useState } from "react";
import "../styles/navBar.css";
import { Link as ReactRouterLink } from "react-router-dom";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem , Input} from "@nextui-org/react";
import { Link as NextUILink } from "@nextui-org/react";
import '../styles/navbar.css'
import SearchMovies from "./SearchMovies";
// import { movies } from "../temp/data";
import SearchMovieMobile from "./SearchMovieMobile";
import axios from "axios";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [movies, setMovies] = useState();


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


  const menuItems = [
    "Inicio",
    "Explorar",
    "Cerrar Sesion"
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
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
          <NextUILink  color="foreground" >
            Inicio
          </NextUILink>
        </NavbarItem>
        </ReactRouterLink>
        <ReactRouterLink to={'/explorar'}>
        <NavbarItem isActive className="explore_button">
          <NextUILink>
            Explorar
          </NextUILink>
        </NavbarItem>
        </ReactRouterLink>  
        <SearchMovies movies={movies}/>
      </NavbarContent>
      <NavbarContent justify="end">
        <ReactRouterLink to={'/login'}>
        <NavbarItem className="hidden login_button lg:flex">
          <NextUILink >Iniciar Sesion</NextUILink>
        </NavbarItem>
        </ReactRouterLink>
        <NavbarItem>
          <SearchMovieMobile movies={movies}/>
        </NavbarItem>
        <ReactRouterLink to={'/register'}>
        <NavbarItem className="register_button">
          <Button  color="primary" href="#" variant="flat">
              Registrarse
          </Button>
        </NavbarItem>
        </ReactRouterLink>
      </NavbarContent>
      <NavbarMenu>
      <ReactRouterLink to={'/'}>
        <NavbarItem>Inicio</NavbarItem>
      </ReactRouterLink>

      <ReactRouterLink to={'/explorar'}>
        <NavbarItem>Explorar</NavbarItem>
      </ReactRouterLink>
      </NavbarMenu>
    </Navbar>
  );
};

export default NavBar;
