import { CiDeliveryTruck } from "react-icons/ci";
import { CiHeadphones } from "react-icons/ci";
import { LuShieldCheck } from "react-icons/lu";

const serviceDetails = [
  {
    id: 1,
    title: "FREE AND FAST DELIVERY",
    description: "Free delivery for order above $140",
    icon: <CiDeliveryTruck />,
  },
  {
    id: 2,
    title: "24/7 CUSTOMER SERVICE",
    description: "Friendly 24/7 customer support",
    icon: <CiHeadphones />,
  },
  {
    id: 3,
    title: "MONEY BACK GUARANTEE",
    description: "We return money within 30 days",
    icon: <LuShieldCheck />,
  },
];

const Services = () => {
  return (
    <section className="flex justify-center gap-20">
      {serviceDetails.map((item, i) => {
        return (
          <div key={i}>
            {/* icon */}
            <div className="flex justify-center w-60">
              <div className="bg-[#c0c1c1] w-20 h-20 flex items-center justify-center rounded-full">
                <div className="text-white bg-black h-14 rounded-full w-14 flex items-center justify-center text-4xl">
                  {item.icon}
                </div>
              </div>
            </div>
            {/* title */}
            <h2 className="text-black text-xl font-semibold leading-7 mt-2">
              {item.title}
            </h2>
            {/* description */}
            <p>{item.description}</p>
          </div>
        );
      })}
    </section>
  );
};

export default Services;

// // higher order function vaneko euta yesto function jasle parameter ma function linxa

// // const sum = () => {
// //     return "bigyan";
// // }

// // // This is higher order function because it takes a function as its paramter
// // const arkoFunction = (sum, num) => {

// // }

// const myArr = ["bigyan", "sunil", "asim"];
// // map is a higher order , array loop function

// const result = myArr.map((jpani, i) => {
// return `${jpani} and index is ${i}`
// })
// console.log(result)
