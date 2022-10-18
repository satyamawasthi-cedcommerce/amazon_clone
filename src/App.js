import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home ";
import Login from "./Components/Login";
import { CartProvider } from "./Components/Context";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";
import Proceed from "./Components/Proceed";
import About from "./Components/About";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Checkout" element={<Checkout />} />
          <Route path="/Proceed" element={<Proceed />} />
        </Routes>
      </CartProvider>
    </div>
  );
}

export default App;
