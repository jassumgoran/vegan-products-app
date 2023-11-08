import axios, { AxiosInstance, AxiosRequestHeaders } from "axios";
import {
  HEADER_PAGE,
  HEADER_TOTAL_COUNT,
  HEADER_TOTAL_PAGES,
} from "../constants/headers";
import { PaginationOptionsType } from "../types";

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

  public async getPaged<T>(
    path: string,
    _headers?: AxiosRequestHeaders
  ): Promise<[T, PaginationOptionsType]> {
    const { data, headers } = await this.api.get(path, {
      headers: _headers,
    });

    const paginationOptions = {
      totalCount: Number(headers[HEADER_TOTAL_COUNT]),
      totalPages: Number(headers[HEADER_TOTAL_PAGES]),
      currentPage: Number(headers[HEADER_PAGE]),
    };

    return [data, paginationOptions];
  }
}

export default ApiClient;
