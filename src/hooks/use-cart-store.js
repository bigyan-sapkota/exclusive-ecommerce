import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCartStore = create(
  persist((set) => ({
    cart: [],
    potato: "black",

    addToCart: (product, quantity) =>
      set((state) => {
        const existingProductIndex = state.cart.findIndex(
          (item) => item.id === product.id,
        );

        console.log(product, quantity, "use-cart-hook");

        let updatedCart;

        if (existingProductIndex !== -1) {
          updatedCart = [...state.cart];
          updatedCart[existingProductIndex].quantity += product.quantity;
        } else {
          // const num = [1, 2, 3, 4 ]
          // const numToEight = [...num, 5, 6, 7, 8] (don't do [num, 5, 6, 7, 8 here])
          // console.log(numToEight)
          updatedCart = [...state.cart, { ...product, quantity: quantity }];
        }

        return { cart: updatedCart };
      }),

    removeFromCart: (productId) =>
      set((state) => ({
        cart: state.cart.filter((item) => item.id !== productId),
      })),

    clearCart: () => set({ cart: [] }),
  })),
);

// cart contains product and quantity for each product

export default useCartStore;
