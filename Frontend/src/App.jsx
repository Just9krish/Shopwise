import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import About from "./Pages/About";
import Cart from "./Pages/Cart";
import Contact from "./Pages/Contact";
import Error from "./Pages/Error";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import Products from "./Pages/Products";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
