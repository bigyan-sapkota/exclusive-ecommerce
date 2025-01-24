import Footer from "../components/footer";
import Header from "../components/header";
import FlashSales from "../components/home/flash-sales";
import Services from "../components/home/services";

const HomePage = () => {
  return (
    <div>
      {/* hero */}
      <div className="margin-y">
        <FlashSales />
      </div>
      {/* Browse by Category */}
      {/* Best selling products */}
      {/* call to action */}
      {/* explore our products */}
      {/* new arrival */}
      <div className="margin-y">
        <Services />
      </div>
    </div>
  );
};

export default HomePage;
