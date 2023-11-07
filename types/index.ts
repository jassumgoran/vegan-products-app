export type Product = {
  id: number;
  name: string;
  description: string;
  category: string;
  price: number;
};

export type RootStackParamList = {
  ProductList: undefined;
  ProductDetails: { product: Product };
};
