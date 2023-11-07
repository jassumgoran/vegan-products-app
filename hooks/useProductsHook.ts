import { useEffect, useState } from "react";
import ApiClient from "../api/client";
import { Product } from "../types";

type UseProductsHookResult = {
  loading: boolean;
  products: Product[] | null | undefined;
  fetchProducts: () => void;
};

const useProductsHook = (): UseProductsHookResult => {
  const [loading, setLoading] = useState<boolean>(true);
  const [products, setProducts] = useState<Product[] | null | undefined>(
    undefined
  );

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const fetchedProducts = await ApiClient.getInstance().get<Product[]>(
        "/products"
      );
      setProducts(fetchedProducts);
    } catch (error) {
      setProducts(null);
    } finally {
      setLoading(false);
    }
  };

  return { loading, products, fetchProducts };
};

export default useProductsHook;
