import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Home } from "./screens/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { UbahTopik } from "./screens/UbahTopik";
import { Provider } from "react-redux";
import store from "./store";
import {
  ListeningSkill,
  ListeningSkillQuestions,
} from "./screens/ListeningSkill";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/ubah-topik",
    element: <UbahTopik />,
  },
  {
    path: "/skill-builder/listening",
    element: <ListeningSkill />,
  },
  {
    path: "/skill-builder/listening/:id/question/:number",
    element: <ListeningSkillQuestions />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
