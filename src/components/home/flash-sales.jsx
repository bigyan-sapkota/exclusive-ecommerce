import { useEffect, useState } from "react";
import { products } from "../../libs/consts";

const endTime = new Date("2025-01-29T15:59:59").getTime();

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

  const calculatePriceAfterDiscount = (orgPrice, discountRate) => {
    const priceAfterDiscount = orgPrice - (discountRate / 100) * orgPrice;
    return priceAfterDiscount;
  };

  // if (seconds <= 0) {
  //   return null;
  // }

  return (
    <section className="max-width padding-x">
      <div>
        {/* box and text */}
        <div className="flex items-center gap-3">
          {/* red box */}
          <div className="h-10 w-5 rounded bg-primary"></div>
          <p className="font-semibold text-primary">Today&apos;s</p>
        </div>

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

      {/* {
    id: 1,
    name: "Ergonomic Mouse Pad",
    price: 100,
    rating: 5,
    numberOfBuyers: 256,
    discountRate: 15,
    discountUpTo: "2025-01-31T23:59:59",
    isNewProduct: true,
    image: "mouse-pad.jpg",
    description:
      "Experience unparalleled comfort and precision with our ergonomic mouse pad...",
    isOnFlashSale: true,
    flashSaleUpTo: "2025-01-31T23:59:59",
  }, */}
      <div className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
        {products.map((item, i) => (
          <div key={i}>
            <div className="group relative h-60 w-full cursor-pointer">
              {/* thumbnail */}
              <img
                src={`/products/${item.image}`}
                alt={item.name}
                className="h-full w-full object-cover"
              />

              {/* discount */}
              {item.discountRate && (
                <div className="absolute left-4 top-4 w-fit rounded bg-primary px-2.5 py-0.5 text-xs font-semibold text-white">
                  -{item.discountRate}%
                </div>
              )}

              {/* show new */}
              {item.isNewProduct && (
                <div className="absolute left-4 top-12 rounded bg-green-600 px-2.5 py-0.5 text-xs font-semibold text-white">
                  NEW
                </div>
              )}

              <button className="custom-transition absolute bottom-0 left-0 h-0 w-full overflow-hidden bg-dark text-white hover:bg-primary group-hover:h-auto group-hover:py-1.5">
                Hello Button
              </button>
            </div>

            <p className="mt-2 font-medium">{item.name}</p>
            {item.discountRate ? (
              <div className="flex gap-2">
                <p className="font-semibold text-primary">
                  Rs.{" "}
                  {calculatePriceAfterDiscount(item.price, item.discountRate)}
                </p>
                <p className="text-gray-400 line-through">{item.price}</p>
              </div>
            ) : (
              <p>Rs.{item.price}</p>
            )}
          </div>
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
