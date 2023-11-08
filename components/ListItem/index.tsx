import React from "react";
import { View, Text } from "react-native";
import { ListItem } from "../../types";
import styles from "./styles";

type ProductListItemProps = {
  item: ListItem;
};

const ProductListItem: React.FC<ProductListItemProps> = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.labels}>
        <Text style={styles.name} numberOfLines={1}>
          {item.title}
        </Text>
        <Text style={styles.description} numberOfLines={1}>
          {item.description}
        </Text>
      </View>
      <Text style={styles.price}>{`${item.value}`}</Text>
    </View>
  );
};

export default ProductListItem;
