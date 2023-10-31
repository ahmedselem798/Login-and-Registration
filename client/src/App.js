import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import Signup from "./Signup";
import Login from "./Login";
import {Routes,Route,BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Signup/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
