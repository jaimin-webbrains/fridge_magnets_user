import { api, handleResponse, handleError } from "./apiServices";

export const addInquiry = (token, data) =>
  api(token)
    .post("/inquiry/add", data)
    .then(handleResponse)
    .catch(handleError);
