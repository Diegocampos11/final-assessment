import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./css/index.css";
import reportWebVitals from "./reportWebVitals";
import ErrorPage from "./error-page";
import "antd/dist/antd.css";
import Root from "./routes/Root";
import User from "./routes/User";
import UserUpdate from "./routes/UserUpdate";
import UsersList from "./routes/UsersList";
import DataSent from "./routes/DataSent";
import { Provider } from "react-redux";
import store from "./store/store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "create-user",
    element: <User />,
  },
  {
    path: "users-list",
    element: <UsersList />,
  },
  {
    path: "data-sent",
    element: <DataSent />,
  },
  {
    path: "user-info",
    element: <UserUpdate />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
