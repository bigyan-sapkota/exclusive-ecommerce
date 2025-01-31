import { Link, useParams } from "react-router-dom";
import { products } from "../libs/consts";

import { FaStar } from "react-icons/fa";
import Button from "../components/button";
import BoxText from "../components/box-text";
import ProductCard from "../components/product-card";

const SingleProductPage = () => {
  const { slug: selectedProductSlug } = useParams();

  //   get selected products
  const selectedProduct = products.find(
    (item) => item.slug === selectedProductSlug,
  );

  //   get unselected products with same category
  const unselectedProductWithSameCategory = products
    .filter((item) => item.slug !== selectedProductSlug)
    .filter((item) => item.categoryId === selectedProduct.categoryId);

  if (!selectedProduct) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <h3>The product you are searching for doesn&apos;t exist</h3>
      </div>
    );
  }

  return (
    <div className="max-width padding-x min-h-screen py-10">
      {/* selected product details */}
      <div>
        {/* bread crumb */}
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
            {/* variant images */}
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
            {/* main image */}
            <div>
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="h-[400px] w-[500px] object-cover"
              />
            </div>
          </div>

          {/* description */}
          <div>
            <h4>{selectedProduct.name}</h4>

            {/* rating and stock */}
            <div className="mt-2 flex gap-4">
              {/* ratings */}
              <div className="flex items-center gap-0.5">
                {/* number of ratings */}
                <div className="flex items-center gap-0.5">
                  {new Array(selectedProduct.rating).fill("").map((_, i) => (
                    <FaStar key={i} className="text-[#ffad33]" />
                  ))}
                </div>
                {/* number of ratings remained */}
                <div className="flex items-center gap-0.5">
                  {new Array(5 - selectedProduct.rating)
                    .fill("")
                    .map((_, i) => (
                      <FaStar key={i} className="text-gray-400" />
                    ))}
                </div>
              </div>

              {/* in stock or not */}
              <p
                className={`${selectedProduct.stock ? "bg-green-500" : "bg-red-500"} w-fit px-1 py-0.5 text-sm text-white`}
              >
                {selectedProduct.stock ? "In Stock" : "Out Of Stock"}
              </p>
            </div>

            <p className="mt-3 text-xl font-medium">
              Rs. {selectedProduct.price}
            </p>

            {/* description */}
            <p className="mt-3">{selectedProduct.description}</p>

            {/* line */}
            <div className="mt-4 h-0.5 bg-gray-300"></div>

            {/* plus minus and button */}
            <div className="mt-4">
              <Button text="Buy Now" />
            </div>
          </div>
        </div>
      </div>

      {/* unselected products */}
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

// const product = [
//     {id:1, slug: "shoes"},
//     {id:2, slug: "keyboard"}
//     ]

// const parameter = "shoes"

// const selectedProduct = product.find(item => item.slug === parameter)
// console.log(selectedProduct)
