import {
  client,
  removeAuthorizationHeader,
  setAuthorizationHeader,
} from "../../api/client";
import type { Login, Credentials } from "./types";
import storage from "../../utils/storage";

export const login = async (credentials: Credentials, rememberMe: boolean) => {
  const response = await client.post<Login>("/api/auth/login", credentials);
  const { accessToken } = response.data;
  setAuthorizationHeader(accessToken);
  if (rememberMe) {
    storage.set("auth", accessToken);
  }
};

export const logout = async () => {
  storage.remove("auth");
  removeAuthorizationHeader();
};
