import axios from "axios";
import React from "react";
const ApiURL = import.meta.env.VITE_API_URL;
if (!ApiURL) {
  throw new Error("Missing API base URL");
}

const axiosInstance = axios.create({
  baseURL: ApiURL,
});

export default axiosInstance;
