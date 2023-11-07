import React from "react";
import { ActivityIndicator } from "react-native";
import Screen from "../Screen";
import { RootStackParamList } from "../../types";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import useProductsHook from "../../hooks/useProductsHook";
import ProductList from "../../components/ProductList";
import { Product } from "../../types";

type Props = NativeStackScreenProps<RootStackParamList, "ProductList">;

const ProductListScreen: React.FC<Props> = ({ navigation }) => {
  const { loading, products } = useProductsHook();

  const handleProductClick = (product: Product) => {
    navigation.navigate("ProductDetails", {
      product,
    });
  };

  return (
    <Screen>
      <>
        {loading ? (
          <ActivityIndicator size="large" />
        ) : (
          <ProductList
            products={products}
            onProductClick={handleProductClick}
          />
        )}
      </>
    </Screen>
  );
};

export default ProductListScreen;
