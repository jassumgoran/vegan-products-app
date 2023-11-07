import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import Screen from "../Screen";
import { RootStackParamList } from "../../types";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import useProductsHook from "../../hooks/useProductsHook";

type Props = NativeStackScreenProps<RootStackParamList, "ProductList">;

const ProductListScreen: React.FC<Props> = ({ navigation }) => {
  const { loading, products } = useProductsHook();

  return (
    <Screen>
      <>
        <Text>Products List Screen</Text>
        {loading ? (
          <Text>{loading}</Text>
        ) : (
          products?.map((product) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("ProductDetails", {
                    product,
                  });
                }}
              >
                <View style={{ padding: 5 }}>{product.name}</View>
              </TouchableOpacity>
            );
          })
        )}
      </>
    </Screen>
  );
};

export default ProductListScreen;
