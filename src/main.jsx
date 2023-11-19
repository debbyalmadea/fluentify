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
import { ListeningSkillResult } from "./screens/ListeningSkill/Result/ListeningSkillResult";

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
  {
    path: "/skill-builder/listening/:id/result",
    element: <ListeningSkillResult />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
