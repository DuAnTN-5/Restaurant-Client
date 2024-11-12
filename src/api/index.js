import axios from "axios";

const api = axios.create({ //create : tạo
  // baseURL: "http://localhost/datn/Restaurant_server/public/api",
    baseURL: "http://localhost:8000/api",
    // baseURL: "http://127.0.0.1:8000/api",
  });
  export {api};