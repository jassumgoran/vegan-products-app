import { Response } from "miragejs";
import { DEFAULT_PAGE_SIZE } from "../../constants";
import {
  HEADER_PAGE,
  HEADER_TOTAL_COUNT,
  HEADER_TOTAL_PAGES,
  HEADER_X_PER_PAGE,
} from "../../constants/headers";
import products from "../../data/products.json";
import { Product } from "../../types";

const search = (products: Product[], query: string) => {
  return products.filter((product) =>
    product.name.toLowerCase().includes(query)
  );
};

const handler = (_schema: any, request: any) => {
  let limit = Number(request.queryParams?.limit || DEFAULT_PAGE_SIZE);
  let page = Number(request.queryParams?.page) || 1;
  let offset = (page - 1) * limit;
  let query = request.queryParams?.search?.toLowerCase();

  let productsResult = query ? search([...products], query) : [...products];

  const total = productsResult.length;

  let totalPages = Math.ceil(total / limit);

  const paginatedItems = productsResult.slice(offset, offset + limit);

  const headers = {
    [HEADER_PAGE]: page.toString(),
    [HEADER_TOTAL_COUNT]: total.toString(),
    [HEADER_TOTAL_PAGES]: totalPages.toString(),
    [HEADER_X_PER_PAGE]: limit.toString(),
  };

  return new Response(200, headers, paginatedItems);
};

export default handler;
