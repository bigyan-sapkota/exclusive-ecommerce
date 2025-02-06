import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Footer from "./components/footer";
import Header from "./components/header";
import CartPage from "./pages/cart-page";
import HomePage from "./pages/home-page";
import ProductsPage from "./pages/products-page";
import SignUpPage from "./pages/sing-up-page";
import SingleProductPage from "./pages/single-product-page";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";

const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/products/:slug" element={<SingleProductPage />} />
        </Routes>
        <Footer />
      </Router>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
