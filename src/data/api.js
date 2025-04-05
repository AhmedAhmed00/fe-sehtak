import axios from "axios";

const BASEURL = "https://lawsystem.cyparta.com";

export const api = axios.create({ baseURL: BASEURL });

// api.defaults.headers.common["Content-Type"] = "application/json";

api.interceptors.request.use(
  async (config) => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

let refreshRequest = null;

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      if (!refreshRequest) {
        refreshRequest = refreshToken();
      }

      try {
        const newAccessToken = await refreshRequest;
        refreshRequest = null;
        localStorage.setItem("accessToken", newAccessToken);
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

        return axios(originalRequest);
      } catch (refreshError) {
        refreshRequest = null;
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        window.location.href = "/login";
        return Promise.reject(refreshError);
      }
    }
    if (error.response?.status === 403) {
      window.location.href = "/unauthorized";
    }

    return Promise.reject(error);
  }
);

async function refreshToken() {
  const refreshToken = localStorage.getItem("refreshToken");
  if (!refreshToken) throw new Error("No refresh token available");

  const response = await axios.post(`${BASEURL}/core/refresh`, {
    refreshToken,
  });
  return response.data.accessToken;
}

// API Endpoints
export const CLIENTS = `/client/clients/`;

export default BASEURL;
