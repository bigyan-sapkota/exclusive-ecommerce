import { QueryClient } from "@tanstack/react-query";

export function getQueryClient() {
  const browserQueryClient = new QueryClient();
  return browserQueryClient;
}
