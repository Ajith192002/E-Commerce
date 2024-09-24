import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Arrivals from './components/Arrivals';
import BestSeller from './components/BestSeller';
import LastBar from './components/LastBar';
import LatestCollection from './components/LatestCollection';
import Navbar from './components/Navbar';
import ProductDetails from './components/ProductDetails';
import FinalFooter from './components/FinalFooter';
import Collections from './components/Collections';
import GetInTouch from './components/GetInTouch';
import About from './components/About';
import ContactUs from './components/ContactUs';
import Cart from './components/Cart';
import { useState } from 'react';
import CheckoutPage from './components/CheckoutPage';
import OrderPlaced from './components/OrderPlaced';

function App() {
  const [cart, setCart] = useState([]);
  console.log(cart, "cart");

  return (
    <Router>
      <div className="px-28">
        <Navbar cart={cart} />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Arrivals />
                <LatestCollection />
                <BestSeller />
                <LastBar />
              </>
            }
          />
          <Route path="/product/:id" element={<ProductDetails cart={cart} setCart={setCart} />} />
          <Route path="/cart" element={<Cart cart={cart} />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/checkout" element={<CheckoutPage cart={cart} />} />
          <Route path="/orderplaced" element={<OrderPlaced cart={cart} />} />
        </Routes>

        <FinalFooter />
        <GetInTouch />
      </div>
    </Router>
  );
}

export default App;
