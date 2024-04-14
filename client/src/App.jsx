import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import MovieListConainer from "./components/containers/MovieListConainer";
import MovieDetailContainer from "./components/containers/MovieDetailContainer";
import ExplorerPageContainer from "./components/containers/ExplorerPageContainer";
import NotFound from "./components/NotFound";
function App() {
 
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={[<NavBar/>, <MovieListConainer /> ]} />
            <Route path="*" element={<NotFound/>}/>         
              <Route path="/movie/:idMovie" element={[<NavBar />, <MovieDetailContainer/> ]} />
              <Route path="/explorar" element={ [<NavBar/>,<ExplorerPageContainer/>]}/>
          </Routes>
          <Footer />
        </BrowserRouter>
    </>
  );
}

export default App;
