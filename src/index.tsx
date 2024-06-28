import React from "react";
import ReactDOM from "react-dom/client"; // Import the root package
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./Redux";

const rootElement = document.getElementById("root");

// Ensure rootElement is not null before calling ReactDOM.createRoot
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);

  root.render(
    <Provider store={store}>
      <App />
    </Provider>
  );
} else {
  console.error("Failed to find the root element to mount to!");
}
