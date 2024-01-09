import { Route, Routes } from "react-router-dom";
import Header from "./components/Partials/Header";
import Footer from "./components/Partials/Footer";

import Home from "./components/Home";
import Login from "./components/Login/Login";
import Register from "./components/Login/Register";


function App() {
  return (
    <div className="App">
      <Header />
      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
