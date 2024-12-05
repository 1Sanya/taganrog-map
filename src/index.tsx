import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"

const rootElement = document.getElementById("root");

// Ensure rootElement is not null before calling ReactDOM.createRoot
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);

  root.render(
    <App />
  );
} else {
  console.error("Failed to find the root element to mount to!");
}
