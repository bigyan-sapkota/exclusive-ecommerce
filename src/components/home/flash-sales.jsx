import { useEffect, useRef, useState } from "react";
import BoxText from "../box-text";
import ProductCard from "../product-card";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { useProduct } from "../../queries/use-product";

const endTime = new Date("2025-02-29T15:59:59").getTime();

const FlashSales = () => {
  const [timeLeft, setTimeLeft] = useState(0);
  const { data: products } = useProduct();

  //  useEffect hook le function ra dependency array linxa
  useEffect(() => {
    const updateTimeLeft = () => setTimeLeft(endTime - Date.now());
    const interval = setInterval(updateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, []);

  const swiperRef = useRef(null);

  const seconds = Math.floor((timeLeft / 1000) % 60);
  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));

  return (
    <section className="max-width padding-x">
      <div>
        {/* box and text */}
        <BoxText text="Today's new" />
        <div className="flex items-center justify-between">
          {/* flash sales and timer */}
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

          {/* left and right button */}
          <div className="flex items-center gap-2">
            <button
              className="custom-transition swiper-button-prev flex size-10 cursor-pointer items-center justify-center rounded-full bg-gray-300 hover:bg-gray-400/60"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <FaArrowLeft />
            </button>
            <button
              className="custom-transition swiper-button-next flex size-10 cursor-pointer items-center justify-center rounded-full bg-gray-300 hover:bg-gray-400/60"
              onClick={() => swiperRef.current?.slideNext()}
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>

      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        slidesPerView={1}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        className="mt-8"
        spaceBetween={30}
      >
        {products?.map((item, i) => (
          <SwiperSlide key={i}>
            <ProductCard product={item} />
          </SwiperSlide>
        ))}
      </Swiper>
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
