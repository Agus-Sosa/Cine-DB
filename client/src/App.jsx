import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import MovieDetailContainer from "./components/pages/MovieDetailContainer";
import NotFound from "./components/NotFound";
import ExploreContainer from "./components/pages/ExploreContainer";
import GenreContainer from "./components/pages/GenreContainer";
import HomeConainer from "./components/pages/HomeConainer";
function App() {
 
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={[<NavBar/>, <HomeConainer /> ]} />
            <Route path="*" element={<NotFound/>}/>         
              <Route path="/movie/:idMovie" element={[<NavBar />, <MovieDetailContainer/> ]} />
              <Route path="/generos" element={ [<NavBar/>,<GenreContainer/>]}/>
              <Route path="/explorar" element={[<NavBar/> ,<ExploreContainer/>]}/>
          </Routes>
          <Footer />
        </BrowserRouter>
    </>
  );
}

export default App;
