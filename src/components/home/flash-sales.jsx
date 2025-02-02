import { useEffect, useState } from "react";
import { products } from "../../libs/consts";
import ProductCard from "../product-card";
import BoxText from "../box-text";

const endTime = new Date("2025-02-29T15:59:59").getTime();

const FlashSales = () => {
  const [timeLeft, setTimeLeft] = useState(0);

  //  useEffect hook le function ra dependency array linxa
  useEffect(() => {
    const updateTimeLeft = () => setTimeLeft(endTime - Date.now());
    const interval = setInterval(updateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, []);

  const seconds = Math.floor((timeLeft / 1000) % 60);
  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));

  return (
    <section className="max-width padding-x">
      <div>
        {/* box and text */}
        <BoxText text="Today's new" />

        <div className="mt-4 flex flex-col gap-2 lg:mt-2 lg:flex-row lg:items-end lg:gap-8">
          <h2>Flash Sales</h2>
          <div className="flex items-end gap-2">
            <Counter show={days} title="Days" />
            <span className="text-2xl text-primary">:</span>
            <Counter show={hours} title="Hours" />
            <span className="text-2xl text-primary">:</span>
            <Counter show={minutes} title="Minutes" />
            <span className="text-2xl text-primary">:</span>
            <Counter show={seconds} title="Seconds" />
          </div>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
        {products.slice(0, 4).map((item, i) => (
          <ProductCard product={item} key={i} />
        ))}
      </div>
    </section>
  );
};

export default FlashSales;

const Counter = ({ title, show }) => {
  return (
    <div>
      <p className="text-sm">{title}</p>
      <h4>{show}</h4>
    </div>
  );
};

// -------------- THIS CODE HELPS US TO GET THE DATE IN MILLISECONDS ------
// const customDate = new Date("2025-01-31T23:59:59").getTime()
// console.log(customDate)
