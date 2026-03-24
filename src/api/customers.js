import axios from "axios";

const API_URL = "https://energy-switch-platform-6.onrender.com/api/customers";  

export const getCustomers = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching customers data", error);
    return [];
  }
};