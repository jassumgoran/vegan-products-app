/**
 * Mock handler for retrieving a single product.
 *
 * @param {number} id - The unique identifier of the product.
 * @returns {Product} - A single product.
 */

import { Response } from "miragejs";
import products from "../../data/products.json";

const handler = (_schema: any, request: any) => {
  let productId = Number(request.params?.id) || 0;

  if (!productId) {
    return new Response(
      400,
      {},
      { error: { message: "Product id is required" } }
    );
  }

  const product = products.find((product) => product.id === productId);

  if (!product) {
    return new Response(404, {}, { error: { message: "Product not found" } });
  }

  return product;
};

export default handler;
