/**
 * Screen for displaying a list of products.
 * @todo Replace hardcoded strings with localized strings for internationalization.
 */

import React, { useState, useRef } from "react";
import { ActivityIndicator, View, TextInput } from "react-native";
import Screen from "../Screen";
import { RootStackParamList } from "../../types";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import useProducts from "../../hooks/useProducts";
import ProductList from "../../components/ProductList";
import { Product } from "../../types";
import styles from "./styles";
import Pagination from "../../components/Pagination";
import EmptyState from "../../components/EmptyState";
import colors from "../../constants/colors";

const DEBOUNCE_DELAY = 250;

type Props = NativeStackScreenProps<RootStackParamList, "ProductList">;

const ProductListScreen: React.FC<Props> = ({ navigation }) => {
  const [search, setSearch] = useState<string>("");
  const [query, setQuery] = useState<string>("");
  const { loading, products, pagination, showEmptyState, fetchProducts } =
    useProducts(query);
  const debounceSearchTimerRef = useRef<NodeJS.Timeout | null>(null);

  const handleProductClick = (product: Product) => {
    navigation.navigate("ProductDetails", {
      product,
    });
  };

  /**
   * Handles search text changes with debouncing to optimize performance by reducing redundant network requests.
   *
   * @param {string} searchText - The search text entered by the user.
   * @todo Move this logic to a hook for future reusability
   */
  const handleSearchTextChange = (searchText: string) => {
    setSearch(searchText);
    if (debounceSearchTimerRef.current) {
      clearTimeout(debounceSearchTimerRef.current);
    }
    debounceSearchTimerRef.current = setTimeout(() => {
      setQuery(searchText);
    }, DEBOUNCE_DELAY);
  };

  return (
    <Screen>
      <>
        <View style={styles.topbar}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search for products"
            clearButtonMode="always"
            value={search}
            onChangeText={handleSearchTextChange}
          />
        </View>
        {loading ? (
          <ActivityIndicator
            size="large"
            color={colors.primary}
            style={styles.loadingIndicator}
          />
        ) : (
          <>
            <View style={styles.content}>
              {showEmptyState ? (
                <EmptyState
                  title="No results"
                  description="No results match your search criteria"
                />
              ) : (
                <ProductList
                  products={products}
                  onProductClick={handleProductClick}
                />
              )}
            </View>
            {pagination && (
              <Pagination
                paginationOptions={pagination}
                onNext={() => fetchProducts(pagination.currentPage + 1)}
                onPrevious={() => fetchProducts(pagination.currentPage - 1)}
              />
            )}
          </>
        )}
      </>
    </Screen>
  );
};

export default ProductListScreen;
