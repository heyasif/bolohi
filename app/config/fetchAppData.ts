// src/api.ts
import { AppData } from "../types/type";

export const fetchAppData = async (): Promise<AppData> => {
  // Use relative URL, Vercel handles serving public assets
  const url = "https://bolohi.vercel.app/bolohi2.json";
  console.log("Attempting to fetch data from:", url);

  try {
    const response = await fetch(url);
    if (!response.ok) {
      console.error("Response not OK:", response.statusText);
      throw new Error("Failed to fetch data");
    }
    const data: AppData = await response.json();
    // console.log("Data fetched successfully:", data);
    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error fetching data:", error.message);
      throw new Error(`Error fetching data: ${error.message}`);
    } else {
      console.error("Unexpected error:", error);
      throw new Error("An unexpected error occurred");
    }
  }
};
