export const backendUrl = "https://online-grocery-server.vercel.app";

export const navigationItems = [
  {
    id: 1,
    text: "Home",
    routeTo: "/",
  },
  {
    id: 2,
    text: "Products",
    routeTo: "/products",
  },
];

export const products = [
  {
    id: 1,
    name: "Ergonomic Mouse Pad",
    slug: "ergonomic-mouse-pad",
    price: 500,
    rating: 5,
    numberOfBuyers: 256,
    discountRate: 15,
    discountUpTo: "2025-01-31T23:59:59",
    isNewProduct: true,
    image: "mouse-pad.jpg",
    variants: [
      "https://i.pinimg.com/736x/bc/71/32/bc7132112b13419bdfc1de4772dda091.jpg",
      "https://i.pinimg.com/736x/d0/36/9e/d0369e15a43d7ef8381fbfca2aaf4fee.jpg",
      "https://i.pinimg.com/736x/d8/74/f1/d874f10791a5c332bf99796d9adc34f5.jpg",
    ],
    description:
      "Experience unparalleled comfort and precision with our ergonomic mouse pad...",
    isOnFlashSale: true,
    flashSaleUpTo: "2025-01-31T23:59:59",
    stock: 5,
    category: "Electronics",
    categoryId: 1,
  },
  {
    id: 2,
    name: "Sporty Sneakers",
    slug: "sporty-sneakers",
    price: 4000,
    rating: 4,
    numberOfBuyers: 500,
    discountRate: 20,
    discountUpTo: "2025-01-25T23:59:59",
    isNewProduct: false,
    image: "shoe.jpg",
    variants: [
      "https://i.pinimg.com/736x/2a/9a/53/2a9a530cc03d8dd849ede2f545d0aede.jpg",
      "https://i.pinimg.com/736x/9e/04/68/9e04689d9fb3444a05d9cd7c9e7dc8f8.jpg",
      "hhttps://i.pinimg.com/736x/9c/5b/57/9c5b57e85040cc03d1cd5ac95245d258.jpg",
    ],
    description:
      "Step into style and comfort with our trendy sporty sneakers...",
    isOnFlashSale: false,
    flashSaleUpTo: "2025-01-31T23:59:59",
    stock: 32,
    category: "Wearing",
    categoryId: 2,
  },
  {
    id: 3,
    name: "Wireless Headphones",
    slug: "wireless-headphones",
    price: 3500,
    rating: 3,
    numberOfBuyers: 320,
    discountRate: 10,
    discountUpTo: "2025-02-10T23:59:59",
    isNewProduct: true,
    image: "headphone.jpg",
    variants: [
      "https://i.pinimg.com/736x/67/2a/2e/672a2eca2b68c1ab9d960e8a864e3e17.jpg",
      "https://i.pinimg.com/736x/a8/33/7f/a8337f50ffaf22a9f4c350ed63362ec8.jpg",
      "https://i.pinimg.com/736x/e0/b8/fa/e0b8faf322f5f2c8f118d608aa34421d.jpg",
    ],
    description:
      "Immerse yourself in high-definition sound with our premium wireless headphones...",
    isOnFlashSale: true,
    flashSaleUpTo: "2025-01-31T23:59:59",
    stock: 5,
    category: "Electronics",
    categoryId: 1,
  },
  {
    id: 4,
    name: "Mechanical Keyboard",
    slug: "mechanical-keyboard",
    price: 8000,
    rating: 4,
    numberOfBuyers: 450,
    discountRate: 25,
    discountUpTo: "2025-02-05T23:59:59",
    isNewProduct: false,
    image: "keyboard.png",
    variants: [
      "https://i.pinimg.com/736x/f9/54/e8/f954e8af2edf37510bbdfd8ecce70732.jpg",
      "https://i.pinimg.com/736x/16/1b/a7/161ba756c0f45c1029b96a3c0a5b1975.jpg",
      "https://i.pinimg.com/736x/76/b6/c1/76b6c13bac37e26947e9062a5e5f379d.jpg",
    ],
    description:
      "Experience precision typing like never before with our mechanical keyboard...",
    isOnFlashSale: false,
    flashSaleUpTo: "2025-01-31T23:59:59",
    stock: 2,
    category: "Electronics",
    categoryId: 1,
  },
  {
    id: 5,
    name: "Classic Cotton T-Shirt",
    slug: "classic-cotton-t-shirt",
    price: 1000,
    rating: 5,
    numberOfBuyers: 300,
    discountRate: 30,
    discountUpTo: "2025-01-28T23:59:59",
    isNewProduct: true,
    image: "tshirt.jpg",
    variants: [
      "https://m.media-amazon.com/images/I/51d5w1z-CFL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/61Bq5qnlFlL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/61P0bD-KmsL._AC_SL1500_.jpg",
    ],
    description: "Upgrade your wardrobe with our classic cotton t-shirt...",
    isOnFlashSale: true,
    flashSaleUpTo: "2025-01-31T23:59:59",
    stock: 3,
    category: "Wearing",
    categoryId: 2,
  },
  {
    id: 6,
    name: "Mountain Bicycle",
    slug: "mountain-bicycle",
    price: 20000,
    rating: 3,
    numberOfBuyers: 150,
    discountRate: 18,
    discountUpTo: "2025-02-12T23:59:59",
    isNewProduct: false,
    image: "bicycle.jpg",
    variants: [
      "https://m.media-amazon.com/images/I/81tNsmfJhPL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71Ku-RNwzFL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71OfUAWey6L._AC_SL1500_.jpg",
    ],
    description: "Conquer trails and city streets with our mountain bicycle...",
    isOnFlashSale: false,
    flashSaleUpTo: "2025-01-31T23:59:59",
    stock: 0,
    category: "Wearing",
    categoryId: 2,
  },
  {
    id: 7,
    name: "Wireless Gaming Mouse",
    slug: "wireless-gaming-mouse",
    price: 2500,
    rating: 4,
    numberOfBuyers: 220,
    discountRate: 15,
    discountUpTo: "2025-01-30T23:59:59",
    isNewProduct: true,
    image: "mouse.jpg",
    variants: [
      "https://m.media-amazon.com/images/I/61IoEAEoHYL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/61nn7nfHLgL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/61YcuN7PCfL._AC_SL1500_.jpg",
    ],
    description:
      "Dominate your game with precision and speed using our wireless gaming mouse...",
    isOnFlashSale: true,
    flashSaleUpTo: "2025-01-31T23:59:59",
    stock: 50,
    category: "Electronics",
    categoryId: 1,
  },
  {
    id: 8,
    name: "Elegant Bowl Set",
    slug: "elegant-bowl-set",
    price: 2500,
    rating: 5,
    numberOfBuyers: 180,
    discountRate: 12,
    discountUpTo: "2025-02-07T23:59:59",
    isNewProduct: false,
    image: "bowl-set.jpg",
    variants: [
      "https://m.media-amazon.com/images/I/71D-BmfYtPL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/61P8tRtuvzL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71iMek6wR9L._AC_SL1500_.jpg",
    ],
    description: "Elevate your dining experience with our elegant bowl set...",
    isOnFlashSale: false,
    flashSaleUpTo: "2025-01-31T23:59:59",
    stock: 3,
    category: "Wearing",
    categoryId: 2,
  },
];

export const productsCategory = [
  { categoryId: 1, category: "Electronics" },
  { categoryId: 2, category: "Wearing" },
];
