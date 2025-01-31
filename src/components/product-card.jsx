import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const calculatePriceAfterDiscount = (orgPrice, discountRate) => {
    const priceAfterDiscount = orgPrice - (discountRate / 100) * orgPrice;
    return priceAfterDiscount;
  };
  return (
    <div>
      <div className="group relative h-60 w-full cursor-pointer">
        {/* thumbnail */}
        <img
          src={`/products/${product.image}`}
          alt={product.name}
          className="h-full w-full object-cover"
        />

        {/* discount */}
        {product.discountRate && (
          <div className="absolute left-4 top-4 w-fit rounded bg-primary px-2.5 py-0.5 text-xs font-semibold text-white">
            -{product.discountRate}%
          </div>
        )}

        {/* show new */}
        {product.isNewProduct && (
          <div className="absolute left-4 top-12 rounded bg-green-600 px-2.5 py-0.5 text-xs font-semibold text-white">
            NEW
          </div>
        )}

        <button className="custom-transition absolute bottom-0 left-0 h-0 w-full overflow-hidden bg-dark text-white hover:bg-primary group-hover:h-auto group-hover:py-1.5">
          Add To Cart
        </button>
      </div>

      <Link
        to={`/products/${product.slug}`}
        className="custom-transition mt-2 block font-medium hover:text-primary"
      >
        {product.name}
      </Link>
      {product.discountRate ? (
        <div className="flex gap-2">
          <p className="font-semibold text-primary">
            Rs.
            {calculatePriceAfterDiscount(product.price, product.discountRate)}
          </p>
          <p className="text-gray-400 line-through">{product.price}</p>
        </div>
      ) : (
        <p>Rs.{product.price}</p>
      )}
    </div>
  );
};

export default ProductCard;
