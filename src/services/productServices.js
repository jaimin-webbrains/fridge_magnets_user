import { api, handleResponse, handleError } from "./apiServices";

export const getProducts = (token) =>
  api(token)
    .get("/products/list")
    .then(handleResponse)
    .catch(handleError);

export const getEditProduct = (token, data) =>
  api(token)
    .post("/product/Edit", data)
    .then(handleResponse)
    .catch(handleError);

export const getSlugByProduct = (token, slug) =>
  api(token)
    .get(`/product/getProduct/${slug}`)
    .then(handleResponse)
    .catch(handleError);
export const getSlugByProduct1 = (token, slug) =>
  api(token)
    .get(`/product/printing-products/${slug}`)
    .then(handleResponse)
    .catch(handleError);

export const addProduct = (token, data) =>
  api(token)
    .post("/products/add", data)
    .then(handleResponse)
    .catch(handleError);

export const updateProduct = (token, id, data) =>
  api(token)
    .put(`/products/update/${id}`, data)
    .then(handleResponse)
    .catch(handleError);

export const deleteProduct = (token, data) =>
  api(token)
    .delete("/products/delete", { data: data })
    .then(handleResponse)
    .catch(handleError);
