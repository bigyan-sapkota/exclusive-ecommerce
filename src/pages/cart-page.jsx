import React from "react";
import useCartStore from "../hooks/use-cart-store";

const CartPage = () => {
  const { cart } = useCartStore();
  console.log(cart);
  return <div>CartPage</div>;
};

export default CartPage;
