import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { backendUrl } from "../libs/consts";

export const productsKey = ["products"];
export const useProduct = () => {
  return useQuery({
    queryKey: productsKey,
    queryFn: fetchProducts,
  });
};

const fetchProducts = async () => {
  const response = await axios.get(`${backendUrl}/api/products`);
  return response.data.products;
};
