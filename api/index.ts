import { createServer } from "miragejs";
import getProducts from "./handlers/getProducts";
import getProduct from "./handlers/getProduct";

export const DEFAULT_PAGE_SIZE = 10;

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
