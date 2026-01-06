import Register from "./pages/Register";
import Produtcs from "./pages/Products";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";

import Header from "./Header";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/products" element={<Produtcs />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
