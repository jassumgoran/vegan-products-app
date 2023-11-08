import { Response } from "miragejs";
import {
  DEFAULT_PAGE_SIZE,
  HEADER_PAGE,
  HEADER_TOTAL_COUNT,
  HEADER_TOTAL_PAGES,
  HEADER_X_PER_PAGE,
} from "../";
import products from "../../data/products.json";

const handler = (_schema: any, request: any) => {
  let limit = Number(request.queryParams?.limit || DEFAULT_PAGE_SIZE);
  let page = Number(request.queryParams?.page) || 1;
  let offset = (page - 1) * limit;
  let search = request.queryParams?.search?.toLowerCase();

  let allProducts = [...products];

  if (search) {
    allProducts = allProducts.filter((product) =>
      product.name.toLowerCase().includes(search)
    );
  }

  const total = allProducts.length;

  let totalPages = Math.ceil(total / limit);

  const paginatedItems = allProducts.slice(offset, offset + limit);

  const headers = {
    [HEADER_PAGE]: page.toString(),
    [HEADER_TOTAL_COUNT]: total.toString(),
    [HEADER_TOTAL_PAGES]: totalPages.toString(),
    [HEADER_X_PER_PAGE]: limit.toString(),
  };

  return new Response(200, headers, paginatedItems);
};

export default handler;
