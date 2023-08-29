import {BrowserRouter, Route , Routes} from "react-router-dom"
import './App.css';
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>

        <Route element={<Home />} path="/" />
        <Route element={<Home />} path="home" />
        <Route element={<Login />} path="login" />
        <Route element={<Signup />} path="signup" />
        

        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
