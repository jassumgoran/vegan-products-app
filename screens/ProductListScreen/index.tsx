import React from "react";
import { Button, Text } from "react-native";
import Screen from "../Screen";
import { RootStackParamList } from "../../types";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

type Props = NativeStackScreenProps<RootStackParamList, "ProductList">;

const ProductListScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <Screen>
      <Text>Products List Screen</Text>
      <Button
        title="Go to details"
        onPress={() => {
          navigation.navigate("ProductDetails", {
            product: {
              id: 1,
              name: "Organic Apple",
              description: "Fresh and crisp organic apple.",
              category: "Fruit",
              price: 2.99,
            },
          });
        }}
      />
    </Screen>
  );
};

export default ProductListScreen;
