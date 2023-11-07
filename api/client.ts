import axios, { AxiosInstance, AxiosRequestHeaders } from "axios";

export const baseURL = process.env.EXPO_PUBLIC_API_URL || "/api/v1";

class ApiClient {
  private static instance: ApiClient | null = null;
  private api: AxiosInstance;

  private constructor() {
    this.api = axios.create({
      baseURL,
    });
  }

  public static getInstance(): ApiClient {
    if (!ApiClient.instance) {
      ApiClient.instance = new ApiClient();
    }
    return ApiClient.instance;
  }

  public async get<T>(path: string, headers?: AxiosRequestHeaders): Promise<T> {
    const { data } = await this.api.get(path, {
      headers,
    });

    return data;
  }
}

export default ApiClient;
