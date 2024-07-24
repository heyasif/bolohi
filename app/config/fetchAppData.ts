// src/api.ts
import { AppData } from "../types/type";

export const fetchAppData = async (): Promise<AppData> => {
  const url = "http://localhost:3000/bolohi2.json"; // Ensure this URL is correct and accessible
  console.log("Attempting to fetch data from:", url);

  try {
    const response = await fetch(url);
    if (!response.ok) {
      console.error("Response not OK:", response.statusText);
      throw new Error("Failed to fetch data");
    }
    const data: AppData = await response.json();
    console.log("Data fetched successfully:", data);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error.message);
    throw error;
  }
};
