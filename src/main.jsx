import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { FavoritesContextProvider } from "./store/favorites-context.jsx";

createRoot(document.getElementById("root")).render(
  <FavoritesContextProvider>
    <App />
  </FavoritesContextProvider>
);
