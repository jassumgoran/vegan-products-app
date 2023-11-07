import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Text } from "react-native";
import { RootStackParamList } from "../../types";
import Screen from "../Screen";

type Props = NativeStackScreenProps<RootStackParamList, "ProductDetails">;

const ProductDetailsScreen: React.FC<Props> = ({ route }) => {
  const { product } = route.params;
  return (
    <Screen>
      <Text>{product.name}</Text>
      <Text>{product.description}</Text>
      <Text>{product.category}</Text>
    </Screen>
  );
};

export default ProductDetailsScreen;
