import axios from "axios";

const api = axios.create({ //create : tạo
    baseURL: "http://localhost/datn/Restaurant_server/public/api",
    // baseURL: "https://admin.hightfiverestaurant.store/api",

  });
  export {api};