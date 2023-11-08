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

export type PaginationOptionsType = {
  totalCount: number;
  totalPages: number;
  currentPage: number;
};

export type Pagination = {
  currentPage: number;
  totalPages: number;
};
