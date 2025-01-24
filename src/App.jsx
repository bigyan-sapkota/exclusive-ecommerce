import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./pages/home-page";
import Header from "./components/header";
import Footer from "./components/footer";
import SignUpPage from "./pages/sing-up-page";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
