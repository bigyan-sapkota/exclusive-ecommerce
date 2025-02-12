import { useState, useRef, useCallback } from "react";
import useInfiniteProducts from "../hooks/use-infinite-product";
import ProductCard from "../components/product-card";
import { IoIosSearch } from "react-icons/io";

// Debounce function
const debounce = (func, delay) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => func(...args), delay);
  };
};

const ProductsPage = () => {
  const [filters, setFilters] = useState({
    searchQuery: "",
    category: "",
    sort: "recent",
    priceRange: { gte: "", lte: "" },
  });

  const { products, loading, error, hasMore, loadMore } =
    useInfiniteProducts(filters);

  const observer = useRef();
  const lastProductRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          loadMore();
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore, loadMore],
  );

  const handleSearch = useCallback(
    debounce((value) => {
      setFilters((prev) => ({ ...prev, searchQuery: value }));
    }, 500),
    [],
  );

  return (
    <div className="max-width padding-x">
      {/* Search & Filters */}
      <div className="mb-8 mt-4 flex items-center justify-between">
        <div className="flex items-center gap-8 rounded bg-secondary py-2 pl-5 pr-2">
          <input
            type="text"
            placeholder="Search products..."
            defaultValue={filters.searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            className="border-0 bg-transparent outline-none"
          />
          <IoIosSearch />
        </div>

        <div className="flex flex-wrap gap-4">
          <select
            value={filters.category}
            onChange={(e) =>
              setFilters((prev) => ({ ...prev, category: e.target.value }))
            }
            className="rounded-lg border px-4 py-2 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="">All Categories</option>
            <option value="fruits">Fruits</option>
            <option value="vegetables">Vegetables</option>
          </select>

          <select
            value={filters.sort}
            onChange={(e) =>
              setFilters((prev) => ({ ...prev, sort: e.target.value }))
            }
            className="rounded-lg border p-2 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="recent">Most Recent</option>
            <option value="oldest">Oldest</option>
            <option value="title_asc">Title (A-Z)</option>
            <option value="title_desc">Title (Z-A)</option>
            <option value="price_asc">Price (Low to High)</option>
            <option value="price_desc">Price (High to Low)</option>
          </select>

          <div className="flex gap-2">
            <input
              type="number"
              placeholder="Min Price"
              value={filters.priceRange.gte}
              onChange={(e) =>
                setFilters((prev) => ({
                  ...prev,
                  priceRange: { ...prev.priceRange, gte: e.target.value },
                }))
              }
              className="w-28 rounded-lg border p-2 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="number"
              placeholder="Max Price"
              value={filters.priceRange.lte}
              onChange={(e) =>
                setFilters((prev) => ({
                  ...prev,
                  priceRange: { ...prev.priceRange, lte: e.target.value },
                }))
              }
              className="w-28 rounded-lg border p-2 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product, index) => (
          <div
            ref={index === products.length - 1 ? lastProductRef : null}
            key={product.id}
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      {/* Loading & Error States */}
      {loading && (
        <div className="py-8 text-center">
          <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
        </div>
      )}
      {error && (
        <div className="py-8 text-center font-medium text-red-500">{error}</div>
      )}
      {!hasMore && !loading && products.length > 0 && (
        <div className="py-8 text-center text-gray-500">
          No more products to load
        </div>
      )}
      {!loading && products.length === 0 && (
        <div className="py-8 text-center text-gray-500">No products found</div>
      )}
    </div>
  );
};

export default ProductsPage;
