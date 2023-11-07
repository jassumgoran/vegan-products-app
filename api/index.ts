import { createServer } from "miragejs";
import products from "../data/products.json";
import { baseURL } from "./client";

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
    this.urlPrefix = baseURL;
    this.get(`/products`, () => {
      return [...products];
    });
  },
});
