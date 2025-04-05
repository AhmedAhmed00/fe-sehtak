import { api, CLIENT_GROUPS, CLIENT_MEDIATORS, CLIENTS } from "../data/api";

/**
 * Generic API request handler
 * @param {string} method - HTTP method (get, post, delete, patch)
 * @param {string} url - API endpoint
 * @param {object} [data=null] - Request body (optional)
 * @returns {Promise<any>}
 */

export async function apiRequest(method, url, data = null) {
  try {
    const res = await api[method](url, data);
    return res.data;
  } catch (error) {
    console.error(`Error in ${method.toUpperCase()} ${url}:`, error);
    throw error.response || new Error("Unknown error occurred");
  }
}

// 🏢 Client Services
export const clientService = {
  getAll: (params) => apiRequest("get", CLIENTS, { params }),
  getById: (id) => apiRequest("get", `${CLIENTS}${id}/`),
  create: (body) => apiRequest("post", CLIENTS, body),
  update: (id, body) => apiRequest("patch", `${CLIENTS}${id}/`, body),
  delete: (id) => apiRequest("delete", `${CLIENTS}${id}/`),
};
