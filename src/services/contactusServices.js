import { api, handleResponse, handleError } from "./apiServices";

export const addContactData = (token, data) =>
  api(token)
    .post("/contact-us/add", data)
    .then(handleResponse)
    .catch(handleError);
