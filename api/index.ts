/**
 * Mock API Server that handles 2 GET product routes
 */

import { createServer } from "miragejs";
import getProducts from "./handlers/getProducts";
import getProduct from "./handlers/getProduct";

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
