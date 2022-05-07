import { API_BASE_URL } from "../constants/api";

const API_KEY = "ba9e9eb1cba46fa2c366ab90f70a5dbe";

export const fetcher = async <T>(endpoint: string, query: string = ""): Promise<T> => {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}?api_key=${API_KEY}${query}`, {
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      method: "GET",
    });

    if (response.status >= 400) {
      throw new Error("Fail to fetch: " + endpoint);
    }

    const body = await response.json();

    return body;
  } catch {
    throw new Error("Fail to fetch: " + endpoint);
  }
};
