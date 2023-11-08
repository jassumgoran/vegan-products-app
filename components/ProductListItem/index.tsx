import React from "react";
import { View, Text } from "react-native";
import { Product } from "../../types";
import styles from "./styles";

type ProductListItemProps = {
  product: Product;
};

const ProductListItem: React.FC<ProductListItemProps> = ({ product }) => {
  return (
    <View style={styles.container}>
      <View style={styles.labels}>
        <Text style={styles.name} numberOfLines={1}>
          {product.name}
        </Text>
        <Text style={styles.description} numberOfLines={1}>
          {product.description}
        </Text>
      </View>
      <Text style={styles.price}>{`$${product.price}`}</Text>
    </View>
  );
};

export default ProductListItem;
