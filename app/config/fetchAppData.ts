// src/api.ts
import { AppData } from "../types/type";

export const fetchAppData = async (): Promise<AppData> => {
  const url = "/bolohi2.json"; // Ensure this URL is correct and accessible
  console.log("Attempting to fetch data from:", url);

  try {
    const response = await fetch(url);
    if (!response.ok) {
      console.error("Response not OK:", response.statusText);
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }
    const data: AppData = await response.json();
    console.log("Data fetched successfully:", data);
    return data;
  } catch (error) {
    // Check if error is an instance of Error to safely access error.message
    if (error instanceof Error) {
      console.error("Error fetching data:", error.message);
      throw new Error(`Error fetching data: ${error.message}`);
    } else {
      console.error("Unexpected error:", error);
      throw new Error("An unexpected error occurred");
    }
  }
};
