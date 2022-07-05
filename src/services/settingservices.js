import { api, handleResponse, handleError } from "./apiServices";

export const getsetting = (token) =>
  api(token)
    .get("/setting/list")
    .then(handleResponse)
    .catch(handleError);

export const addsetting = (token, data) =>
  api(token)
    .post("/setting/add", data)
    .then(handleResponse)
    .catch(handleError);

export const updatesetting = (token, data) =>
  api(token)
    .put(`/setting/update`, data)
    .then(handleResponse)
    .catch(handleError);
