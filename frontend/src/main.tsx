import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from './App.tsx'
import Body from "./components/Body.tsx";
import Header from "./components/Header.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <App /> */}
    <div className="flex-1 w-full">
      <Header />
      <Body />
    </div>
  </StrictMode>,
);
