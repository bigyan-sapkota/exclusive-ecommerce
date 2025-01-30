import React from "react";
import { products } from "../libs/consts";
import ProductCard from "../components/product-card";

const ProductsPage = () => {
  return (
    <section className="max-width padding-x grid grid-cols-2 gap-6 py-10 md:grid-cols-3 lg:grid-cols-4">
      {products.map((item, i) => (
        <ProductCard key={i} product={item} />
      ))}
    </section>
  );
};

export default ProductsPage;
