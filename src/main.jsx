import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root";
import ItemRoot from "./routes/item";
import Cart from "./Routes/cart";
import CheckOutRoute from "./Routes/checkoutRoute";
import CustomProvider from "./Context";


import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBwRbhAfk8gUn5wHWvA7y7TholXq2REpYg",
  authDomain: "benatural-1d5de.firebaseapp.com",
  projectId: "benatural-1d5de",
  storageBucket: "benatural-1d5de.appspot.com",
  messagingSenderId: "1057428919973",
  appId: "1:1057428919973:web:8db97ede8f83b599af9f4c"
};

const app = initializeApp(firebaseConfig);


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/category/:id",
    element: <Root />,
  },
  {
    path: "/item/:id",
    element: <ItemRoot />,
  },
  {
    path: "/cart",
    element:<Cart />,
  },
  {
    path: "/checkout",
    element: <CheckOutRoute />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CustomProvider>
    <RouterProvider router={router} />
    </CustomProvider>
  </React.StrictMode>
);
