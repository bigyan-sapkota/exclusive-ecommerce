import { useInfiniteQuery } from "@tanstack/react-query";

const fetchProducts = async ({ pageParam = null, filters }) => {
  const { searchQuery, category, sort, priceRange } = filters;
  let url = `https://online-grocery-server.vercel.app/api/products?limit=20`;

  if (searchQuery) url += `&q=${searchQuery}`;
  if (category) url += `&category=${category}`;
  if (sort) url += `&sort=${sort}`;
  if (priceRange.gte) url += `&price_gte=${priceRange.gte}`;
  if (priceRange.lte) url += `&price_lte=${priceRange.lte}`;
  if (pageParam) url += `&cursor=${pageParam}`;

  const response = await fetch(url);
  const data = await response.json();

  return {
    products: data.products,
    nextCursor: data.cursor,
  };
};

const useInfiniteProducts = (filters) => {
  const { data, fetchNextPage, hasNextPage, isFetching, isError, error } =
    useInfiniteQuery({
      queryKey: ["products", filters],
      queryFn: ({ pageParam }) => fetchProducts({ pageParam, filters }),
      getNextPageParam: (lastPage) => lastPage.nextCursor,
      initialPageParam: null,
    });

  return {
    products: data?.pages.flatMap((page) => page.products) ?? [],
    loading: isFetching,
    error: isError ? error?.message || "Failed to fetch products" : null,
    hasMore: hasNextPage,
    loadMore: fetchNextPage,
  };
};

export default useInfiniteProducts;
