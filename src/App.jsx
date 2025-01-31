import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./pages/home-page";
import Header from "./components/header";
import Footer from "./components/footer";
import SignUpPage from "./pages/sing-up-page";
import ProductsPage from "./pages/products-page";
import SingleProductPage from "./pages/single-product-page";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:slug" element={<SingleProductPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;

//         <Route path="/products/:slug" element={<ProductDetails />} />
