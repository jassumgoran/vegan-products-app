import React from "react";
import { FlatList, Pressable, View } from "react-native";
import ProductListItem from "../ProductListItem";
import { Product } from "../../types";
import styles from "./styles";
import colors from "../../constants/colors";

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
          backgroundColor: pressed ? colors.accent : "transparent",
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
        ItemSeparatorComponent={() => <View style={styles.divider} />}
      />
    </>
  );
};

export default ProductList;
