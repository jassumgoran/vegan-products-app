import { createServer } from "miragejs";
import getProducts from "./handlers/getProducts";
import getProduct from "./handlers/getProduct";

export const DEFAULT_PAGE_SIZE = 10;

export const HEADER_PAGE = "x-page";
export const HEADER_TOTAL_COUNT = "x-total-count";
export const HEADER_TOTAL_PAGES = "x-total-pages";
export const HEADER_X_PER_PAGE = "x-per-page";
declare global {
  interface Window {
    server: { shutdown: () => void };
  }
}

if (window.server) {
  window.server.shutdown();
}

window.server = createServer({
  routes() {
    this.urlPrefix = process.env.EXPO_PUBLIC_API_URL || "/api/v1";
    this.get("/products", getProducts);
    this.get("/product/:id", getProduct);
  },
});
