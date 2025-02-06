import React from "react";
import ProductCard from "../components/product-card";
import { useProduct } from "../queries/use-product";

const ProductsPage = () => {
  const { data } = useProduct();
  return (
    <section className="max-width padding-x grid grid-cols-2 gap-6 py-10 md:grid-cols-3 lg:grid-cols-4">
      {data?.map((item, i) => (
        <ProductCard key={i} product={item} />
      ))}
    </section>
  );
};

export default ProductsPage;

// components vitra product card xa, flash sales ma tei card haldine
