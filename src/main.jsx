import React from "react";
import { Theme } from "react-daisyui";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"


ReactDOM.createRoot(document.getElementById("root")).render(<Theme dataTheme="synthwave"><App /></Theme>);
