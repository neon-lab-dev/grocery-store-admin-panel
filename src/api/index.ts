const AUTH_URL = import.meta.env.VITE_LOGIN_SERVICE_BASE_URL + "/v1";
const PRODUCT_URL = import.meta.env.VITE_PRODUCT_SERVICE_BASE_URL + "/v1";
// const AUTH_URL = "http://localhost:8080" + "/v1";

const API = {
  addProduct: PRODUCT_URL + "/product/add",
  allProducts: PRODUCT_URL + "/product/list",
  deleteProduct: PRODUCT_URL + "/product/delete",
  updateProduct: PRODUCT_URL + "/product/update",
};

export default API;
