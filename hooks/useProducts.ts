import { useEffect, useState } from "react";
import ApiClient from "../api/client";
import { PaginationOptionsType, Product } from "../types";

type UseProductsResult = {
  loading: boolean;
  products: Product[] | null | undefined;
  showEmptyState: boolean;
  pagination: PaginationOptionsType | null | undefined;
  fetchProducts: (page?: number) => void;
};

const useProducts = (search?: string): UseProductsResult => {
  const [loading, setLoading] = useState<boolean>(true);
  const [products, setProducts] = useState<Product[] | null | undefined>(
    undefined
  );

  const [pagination, setPagination] = useState<
    PaginationOptionsType | null | undefined
  >(undefined);

  useEffect(() => {
    fetchProducts();
  }, [search]);

  const fetchProducts = async (page = 1) => {
    try {
      const [fetchedProducts, paginationOptions] =
        await ApiClient.getInstance().getPaged<Product[]>(
          `/products?page=${page}${search ? `&search=${search}` : ""}`
        );
      setProducts(fetchedProducts);
      setPagination(
        paginationOptions.totalCount > 1 ? paginationOptions : null
      );
    } catch (error) {
      setProducts(null);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    products,
    pagination,
    showEmptyState:
      products !== null && products !== undefined && products.length === 0,
    fetchProducts,
  };
};

export default useProducts;
