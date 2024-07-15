import axios from "axios";

export const fetchMockData = async () => {
  try {
    const response = await axios.get("../data.json");
    return response.data.data;
  } catch (error) {
    console.error("Error fetching mock data", error);
    throw error;
  }
};
