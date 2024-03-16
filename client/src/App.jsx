import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import MovieListConainer from "./components/containers/MovieListConainer";
import RegisterForm from "./components/RegisterForm";
import MovieDetailContainer from "./components/containers/MovieDetailContainer";
import LoginForm from "./components/LoginForm";
import ExplorerPageContainer from "./components/containers/ExplorerPageContainer";
import NotFound from "./components/NotFound";
import Profile from "./components/Profile";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={[<NavBar />, <MovieListConainer /> ]} />
          <Route path="/register" element={<RegisterForm/>}/>
          <Route path="/login" element={<LoginForm/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/movie/:idMovie" element={[<NavBar />, <MovieDetailContainer/> ]} />
          <Route path="/explorar" element={ [<NavBar/>,<ExplorerPageContainer/>]}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
