import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css';
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";
import { AnimatePresence } from "framer-motion";
import { UserProvider } from "./UserContext";

function App() {
  return (
    <div>
      <BrowserRouter>
        <UserProvider>
          <Navbar />
          <AnimatePresence mode="wait">
            <switch>
              <Routes>

                <Route element={<Home />} path="/" />
                <Route element={<Home />} path="home" />
                <Route element={<Login />} path="login" />
                <Route element={<Signup />} path="signup" />

              </Routes>
            </switch>
          </AnimatePresence>
        </UserProvider>
      </BrowserRouter>





    </div>

  );
}

export default App;
