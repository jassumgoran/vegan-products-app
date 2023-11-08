import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { View, Text } from "react-native";
import { RootStackParamList } from "../../types";
import Screen from "../Screen";
import styles from "./styles";

type Props = NativeStackScreenProps<RootStackParamList, "ProductDetails">;

const ProductDetailsScreen: React.FC<Props> = ({ route }) => {
  const { product } = route.params;
  return (
    <Screen>
      <View style={styles.labelContainer}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.price}>{`($${product.price})`}</Text>
      </View>
      <Text style={styles.description}>{product.description}</Text>
      <Text style={styles.text}>
        {
          "Quisque consequat egestas nisl, in ullamcorper orci vestibulum ut. Curabitur sit amet enim ac lectus varius tincidunt ultrices ut quam. Cras nulla augue, elementum eu tincidunt vitae, molestie et nulla. Ut lacinia tempor lectus, nec elementum libero consequat vitae. Phasellus velit magna, accumsan in tempor eu, consectetur non lacus. Duis lacinia, tortor ac volutpat finibus, leo enim vehicula est, ut blandit elit lacus ac nibh. Phasellus posuere velit sed libero aliquam varius. Donec sit amet vulputate eros, eget volutpat leo. Etiam posuere, magna eu pulvinar laoreet, erat nisl vehicula neque, ut hendrerit enim risus vitae enim. Pellentesque lectus neque, mollis fringilla arcu a, iaculis gravida nunc. Aliquam vel massa id turpis feugiat consectetur. Nulla gravida aliquet quam, iaculis vulputate massa feugiat egestas. Praesent at gravida augue. Nullam blandit felis nulla, sit amet aliquam lacus ornare sed."
        }
      </Text>
    </Screen>
  );
};

export default ProductDetailsScreen;
