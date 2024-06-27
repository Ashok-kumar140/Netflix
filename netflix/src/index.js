import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Provider } from 'react-redux';
import { Store } from './redux/Store';
import MovieDialog from "./components/MovieDialog";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={Store}>
        <App />
        <Toaster />
        <MovieDialog/>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
