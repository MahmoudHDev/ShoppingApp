import { Route, Routes } from "react-router-dom";
import Header from "./components/Partials/Header";
import Footer from "./components/Partials/Footer";

import Home from "./components/Home";
import Login from "./components/Login/Login";
import Register from "./components/Login/Register";
import Product from "./components/Product";
import NotFound from "./components/NotFound";


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
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
