import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import MovieDetailContainer from "./components/pages/MovieDetailContainer";
import NotFound from "./components/NotFound";
import ExploreContainer from "./components/pages/ExploreContainer";
import GenreContainer from "./components/pages/GenreContainer";
import HomeConainer from "./components/pages/HomeConainer";
import ScrollToTopButton from "./components/ScrollToTopButton";
// import Test from "./components/pages/test";
function App() {
 
  return (
    <>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={[<NavBar/>, <HomeConainer />, <ScrollToTopButton/> ]} />
              <Route path="*" element={<NotFound/>}/> 
              {/* <Route path="/test" element={<Tests/>}/>        */}
              <Route path="/movie/:idMovie" element={[<NavBar />, <MovieDetailContainer/> ]} />
              <Route path="/generos" element={ [<NavBar/>,<GenreContainer/>, <ScrollToTopButton/>]}/>
              <Route path="/explorar" element={[<NavBar/> ,<ExploreContainer/>, <ScrollToTopButton/>]}/>
          </Routes>

          <Footer />
        </BrowserRouter>
    </>
  );
}

export default App;
