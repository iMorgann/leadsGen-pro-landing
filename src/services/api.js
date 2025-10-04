import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://license.leadsgen-pro.shop';

export const api = {
  // Payment APIs
  createOrder: async (orderData) => {
    const response = await axios.post(`${API_BASE_URL}/api/v1/payment/create`, orderData);
    return response.data;
  },

  submitTxid: async (orderId, txid) => {
    const response = await axios.post(`${API_BASE_URL}/api/v1/payment/submit-txid`, {
      order_id: orderId,
      txid
    });
    return response.data;
  },

  getOrderStatus: async (orderId) => {
    const response = await axios.get(`${API_BASE_URL}/api/v1/payment/status/${orderId}`);
    return response.data;
  },

  downloadLicense: async (orderId) => {
    const response = await axios.get(`${API_BASE_URL}/api/v1/payment/download/${orderId}`, {
      responseType: 'blob'
    });
    return response.data;
  },

  // License APIs
  activateTrial: async (hardwareId) => {
    const response = await axios.post(`${API_BASE_URL}/api/v1/trial/activate`, { hardware_id: hardwareId });
    return response.data;
  }
};

export default api;
