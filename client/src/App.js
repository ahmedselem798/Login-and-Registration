import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Signup from "./Signup";
import Login from "./Login";
import Home from "./Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";


function App() {
  const isLoggedIn = window.localStorage.getItem("loggedIn");
  return (
    <div>
      <BrowserRouter>
        <Routes>
          
          <Route
            exact
            path="/"
            element={isLoggedIn === "true" ? <Home /> : <Login />}
          ></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/register" element={<Signup />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
