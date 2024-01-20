import { Route, Routes } from "react-router-dom";
import Header from "./components/Partials/Header";
import Footer from "./components/Partials/Footer";

import Home from "./components/Home";
import Login from "./components/Login/Login";
import Register from "./components/Login/Register";
import Product from "./components/Product";
import NotFound from "./components/NotFound";
import Cart from "./components/Cart";
import RegSucc from './components/RegSucc'
import About from "./components/About";


function App() {
  return (
    <div className="App">
      <Header />
      {/* Routes */}
      <Routes>
        <Route path="/" />
        <Route index element={<Home />} />
        <Route path="/product/:encodedProps" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/RegSucc" element={<RegSucc />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
