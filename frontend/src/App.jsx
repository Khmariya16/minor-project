import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css';
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";
import { AnimatePresence } from "framer-motion";
import { UserProvider } from "./UserContext";
import GraphicCust from "./components/GraphicCust";

function App() {
  return (
    <div>
      <BrowserRouter>
        <UserProvider>
          <Navbar />
          <AnimatePresence mode="wait">
            <Routes>

              <Route element={<Home />} path="/" />
              <Route element={<Home />} path="home" />
              <Route element={<Login />} path="login" />
              <Route element={<Signup />} path="signup" />
              <Route element={<GraphicCust />} path="customizer" />

            </Routes>
          </AnimatePresence>
        </UserProvider>
      </BrowserRouter>





    </div>

  );
}

export default App;
