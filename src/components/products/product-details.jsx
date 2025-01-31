import { Link, useParams } from "react-router-dom";
import { products } from "../../libs/consts";

const ProductDetails = () => {
  const { slug } = useParams();

  //   I want to get details about the product which slug I have
  const selectedProduct = products.find((item) => (item.slug = slug));

  //   {
  //     id: 2,
  //     name: "Sporty Sneakers",
  //     slug: "sporty-sneakers",
  //     price: 4000,
  //     rating: 4,
  //     numberOfBuyers: 500,
  //     discountRate: 20,
  //     discountUpTo: "2025-01-25T23:59:59",
  //     isNewProduct: false,
  //     image: "shoe.jpg",
  //     variants: [
  //       "https://i.pinimg.com/736x/2a/9a/53/2a9a530cc03d8dd849ede2f545d0aede.jpg",
  //       "https://i.pinimg.com/736x/9e/04/68/9e04689d9fb3444a05d9cd7c9e7dc8f8.jpg",
  //       "hhttps://i.pinimg.com/736x/9c/5b/57/9c5b57e85040cc03d1cd5ac95245d258.jpg",
  //     ],
  //     description:
  //       "Step into style and comfort with our trendy sporty sneakers...",
  //     isOnFlashSale: false,
  //     flashSaleUpTo: "2025-01-31T23:59:59",
  //   },

  return (
    <div className="max-width padding-x py-10">
      {/* bread crumb */}
      <div className="flex items-center gap-2">
        <Link to="/" className="text-gray-600">
          Home
        </Link>
        <span className="text-gray-600">/</span>
        <Link to="/products" className="text-gray-600">
          Products
        </Link>
        <span className="text-gray-600">/</span>
        <p>{selectedProduct.name}</p>
      </div>

      {/* images */}
      <div>
        <div>
          {selectedProduct.variants.map((item, i) => (
            <img key={i} src={item} alt={selectedProduct.name} />
          ))}
        </div>
        <div></div>
      </div>
      <div></div>
    </div>
  );
};

export default ProductDetails;
