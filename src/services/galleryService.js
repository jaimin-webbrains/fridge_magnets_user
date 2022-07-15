import { api, handleResponse, handleError } from "./apiServices";

export const getGallery = (token, data) =>
  api(token)
    .post("/gallery/list", data)
    .then(handleResponse)
    .catch(handleError);
