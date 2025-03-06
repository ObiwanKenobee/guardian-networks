
import React from "react";
import ReactDOM from "react-dom/client";
import { ClerkProvider } from "@clerk/clerk-react";
import App from "./App";
import "./index.css";

// Set Clerk publishable key
const PUBLISHABLE_KEY = "pk_test_c3Ryb25nLW1vbmFyY2gtMC5jbGVyay5hY2NvdW50cy5kZXYk";

if (!PUBLISHABLE_KEY) {
  console.error("Missing Clerk Publishable Key");
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY || "pk_test_placeholder"}>
      <App />
    </ClerkProvider>
  </React.StrictMode>
);
