import { api, handleResponse, handleError } from "./apiServices";

export const getGallery = (token) =>
  api(token)
    .get("/gallerys/list")
    .then(handleResponse)
    .catch(handleError);
