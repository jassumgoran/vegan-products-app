import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FontAwesome5 } from "@expo/vector-icons";
import ProductListScreen from "./screens/ProductListScreen";
import ProductDetailsScreen from "./screens/ProductDetailsScreen";
import { RootStackParamList } from "./types";
import "./api";

const Stack = createNativeStackNavigator<RootStackParamList>();

function LogoTitle() {
  return <FontAwesome5 name="leaf" size={24} color="green" />;
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="ProductList"
        screenOptions={{
          headerTintColor: "green",
          headerStyle: {
            backgroundColor: "lightyellow",
          },
        }}
      >
        <Stack.Screen
          name="ProductList"
          component={ProductListScreen}
          options={{
            title: "Products",
            headerTitle: () => <LogoTitle />,
          }}
        />
        <Stack.Screen
          name="ProductDetails"
          component={ProductDetailsScreen}
          options={{
            title: "Details",
          }}
        />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
