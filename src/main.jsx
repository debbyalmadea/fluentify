import React from "react";
import ReactDOM from "react-dom/client";
import 'regenerator-runtime'
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
import { SpeakingSkill } from "./screens/SpeakingSkill";
import { WritingSkill } from "./screens/WritingSkill";
import { WritingSkillResult } from "./screens/WritingSkill/Result/WritingSkillResult"
import { ListeningSkillResult } from "./screens/ListeningSkill/Result/ListeningSkillResult";
import { SpeakingSkillResult } from "./screens/SpeakingSkill/Result";
import { Toaster } from "react-hot-toast";
import { SplashScreen } from "./screens/Splash/Splash";
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
    path: "/skill-builder/writing",
    element: <WritingSkill />,
  },
  {
    path: "/skill-builder/writing/result",
    element: <WritingSkillResult />,
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
    path: "/skill-builder/speaking",
    element: <SpeakingSkill />,
  },
  {
    path: "/skill-builder/listening/:id/result",
    element: <ListeningSkillResult />,
  },
  {
    path: "/skill-builder/speaking/result",
    element: <SpeakingSkillResult />,
  },
  {
    path: "/splash",
    element: <SplashScreen />,
  }
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Toaster></Toaster>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
