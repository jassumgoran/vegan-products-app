import React from "react";
import { FlatList, Pressable } from "react-native";
import ProductListItem from "../ProductListItem";
import { Product } from "../../types";
import styles from "./styles";

type ProductListProps = {
  products: Product[] | null | undefined;
  onProductClick: (product: Product) => void;
};

const ProductList: React.FC<ProductListProps> = ({
  products,
  onProductClick,
}) => {
  const renderProduct = ({ item: product }: { item: Product }) => (
    <Pressable
      onPress={() => onProductClick(product)}
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? "lightyellow" : "white",
        },
      ]}
    >
      <ProductListItem product={product} />
    </Pressable>
  );

  return (
    <>
      <FlatList
        style={styles.container}
        data={products}
        keyExtractor={(product) => product.id.toString()}
        renderItem={renderProduct}
      />
    </>
  );
};

export default ProductList;
