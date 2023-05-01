import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const client = new QueryClient();

export const ApiProvider = ({ children }) => {
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};
