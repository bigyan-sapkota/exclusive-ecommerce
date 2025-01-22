import Footer from "../components/footer";
import Header from "../components/header";
import FlashSales from "../components/home/flash-sales";
import Services from "../components/home/services";

const HomePage = () => {
  return (
    <div>
      <Header />
      {/* hero */}
      <FlashSales />
      {/* Browse by Category */}
      {/* Best selling products */}
      {/* call to action */}
      {/* explore our products */}
      {/* new arrival */}
      <Services />
      <Footer />
    </div>
  );
};

export default HomePage;
