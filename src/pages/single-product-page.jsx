import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { products } from "../libs/consts";

import { FaStar } from "react-icons/fa";
import Button from "../components/button";
import BoxText from "../components/box-text";
import ProductCard from "../components/product-card";
import useCartStore from "../hooks/use-cart-store";

const SingleProductPage = () => {
  const { slug: selectedProductSlug } = useParams();
  const [quantity, setQuantity] = useState(1);
  const { cart, addToCart } = useCartStore();

  // Get selected product
  const selectedProduct = products.find(
    (item) => item.slug === selectedProductSlug,
  );

  if (!selectedProduct) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <h3>The product you are searching for doesn&apos;t exist</h3>
      </div>
    );
  }

  // Increase quantity
  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  // Decrease quantity
  const decreaseQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  // Add to cart handler
  const cartClickHandler = () => {
    addToCart(selectedProduct, quantity);
  };

  // Get related products
  const unselectedProductWithSameCategory = products
    .filter((item) => item.slug !== selectedProductSlug)
    .filter((item) => item.categoryId === selectedProduct.categoryId);

  return (
    <div className="max-width padding-x min-h-screen py-10">
      <div>
        {/* Breadcrumb */}
        <div className="mb-5 flex items-center gap-1">
          <Link
            to="/"
            className="custom-transition text-gray-500 hover:text-primary"
          >
            Home
          </Link>
          <span className="text-gray-500">/</span>
          <Link
            to="/products"
            className="custom-transition text-gray-500 hover:text-primary"
          >
            Products
          </Link>
          <span className="text-gray-500">/</span>
          <p>{selectedProduct.name}</p>
        </div>

        <div className="flex gap-16">
          {/* Images */}
          <div className="flex gap-7">
            <div className="space-y-8">
              {selectedProduct.variants.map((item, i) => (
                <div key={i}>
                  <img
                    src={item}
                    alt={selectedProduct.name}
                    className="h-36 w-44 border object-cover"
                  />
                </div>
              ))}
            </div>
            <div>
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="h-[400px] w-[500px] object-cover"
              />
            </div>
          </div>

          {/* Product Details */}
          <div>
            <h4>{selectedProduct.name}</h4>

            {/* Rating and Stock */}
            <div className="mt-2 flex gap-4">
              <div className="flex items-center gap-0.5">
                {new Array(selectedProduct.rating).fill("").map((_, i) => (
                  <FaStar key={i} className="text-[#ffad33]" />
                ))}
                {new Array(5 - selectedProduct.rating).fill("").map((_, i) => (
                  <FaStar key={i} className="text-gray-400" />
                ))}
              </div>
              <p
                className={`${selectedProduct.stock ? "bg-green-500" : "bg-red-500"} w-fit px-1 py-0.5 text-sm text-white`}
              >
                {selectedProduct.stock ? "In Stock" : "Out Of Stock"}
              </p>
            </div>

            <p className="mt-3 text-xl font-medium">
              Rs. {selectedProduct.price}
            </p>
            <p className="mt-3">{selectedProduct.description}</p>

            <div className="mt-4 h-0.5 bg-gray-300"></div>

            {/* Quantity and Buttons */}
            <div className="mt-4 flex items-center gap-4">
              <button
                onClick={decreaseQuantity}
                className="size-8 rounded bg-gray-300 text-lg"
              >
                -
              </button>
              <span className="text-lg font-medium">{quantity}</span>
              <button
                onClick={increaseQuantity}
                className="size-8 rounded bg-gray-300 text-lg"
              >
                +
              </button>
            </div>

            <div className="mt-4">
              <Button text="Buy Now" buttonClickHandler={cartClickHandler} />
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-8">
        <BoxText text="Related items" />
        <div className="mt-6 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
          {unselectedProductWithSameCategory.map((item, i) => (
            <ProductCard key={i} product={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
