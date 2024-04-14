import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import MovieListConainer from "./components/containers/MovieListConainer";
import MovieDetailContainer from "./components/containers/MovieDetailContainer";
import ExplorerPageContainer from "./components/containers/ExplorerPageContainer";
import NotFound from "./components/NotFound";
import { AuthProvider } from "./context/AuthContext";
function App() {
 
  return (
    <>
    <AuthProvider>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={[<NavBar/>, <MovieListConainer /> ]} />
            {/* <Route path="/register" element={<RegisterForm/>}/> */}
            {/* <Route path="/login" element={<LoginForm />}/> */}
            <Route path="*" element={<NotFound/>}/>

            {/* <Route
              path="/login"
              element={!isLoggedIn ? <LoginForm onLogin={handleLogin} /> : <Navigate to="/profile" />}
            /> */}

              {/* <Route path="/profile" element={<Profile/> }/> */}
              <Route path="/movie/:idMovie" element={[<NavBar />, <MovieDetailContainer/> ]} />
              <Route path="/explorar" element={ [<NavBar/>,<ExplorerPageContainer/>]}/>

          </Routes>
          <Footer />
        </BrowserRouter>
    </AuthProvider>
     
    </>
  );
}

export default App;
