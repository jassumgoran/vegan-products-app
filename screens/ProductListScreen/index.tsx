/**
 * Screen for displaying a list of products.
 * @todo Replace hardcoded strings with localized strings for internationalization.
 */

import React, { useState } from "react";
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

type Props = NativeStackScreenProps<RootStackParamList, "ProductList">;

const ProductListScreen: React.FC<Props> = ({ navigation }) => {
  const [search, setSearch] = useState<string>("");
  const { loading, products, pagination, showEmptyState, fetchProducts } =
    useProducts(search);

  const handleProductClick = (product: Product) => {
    navigation.navigate("ProductDetails", {
      product,
    });
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
            onChangeText={setSearch}
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
