import { useEffect, useState } from "react";

const endTime = new Date(1738347299000).getDate();

const FlashSales = () => {
  const [timeLeft, setTimeLeft] = useState(0);

  //  useEffect hook le function ra dependency array linxa
  useEffect(() => {
    const updateTimeLeft = () => {
      return endTime - Date.now();
    };
    setTimeLeft(updateTimeLeft);
  }, []);

  const seconds = Math.floor((timeLeft / 1000) % 60);
  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));

  return <div></div>;
};

export default FlashSales;

// -------------- THIS CODE HELPS US TO GET THE DATE IN MILLISECONDS ------
// const customDate = new Date("2025-01-31T23:59:59").getTime()
// console.log(customDate)
