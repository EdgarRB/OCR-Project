import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from './App.tsx'
import Body from "./components/Body.tsx";
import Header from "./components/Header.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      {/* <App /> */}
      <div className="flex-1 w-full">
        <Header />
        <Body />
      </div>
    </QueryClientProvider>
  </StrictMode>,
);
