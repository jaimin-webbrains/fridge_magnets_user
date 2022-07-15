import { api, handleResponse, handleError } from "./apiServices";

export const getNews = (token) =>
  api(token)
    .get("/news/list")
    .then(handleResponse)
    .catch(handleError);
