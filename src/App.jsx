import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Footer from "./components/footer";
import Header from "./components/header";
import CartPage from "./pages/cart-page";
import HomePage from "./pages/home-page";
import ProductsPage from "./pages/products-page";
import SignUpPage from "./pages/sing-up-page";
import SingleProductPage from "./pages/single-product-page";

import { Toaster } from "sonner";
import LoginToProceed from "./pages/login-to-proceed";

const App = () => {
  return (
    <div>
      <Toaster />
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/products/:slug" element={<SingleProductPage />} />
          <Route path="/login" element={<LoginToProceed />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
