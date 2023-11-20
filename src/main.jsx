import React from "react";
import ReactDOM from "react-dom/client";
import "regenerator-runtime";
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
import { ListeningSkillResult } from "./screens/ListeningSkill/Result/ListeningSkillResult";
import { ProgressTracker } from "./screens/ProgressTracker";
import { SpeakingSkillResult } from "./screens/SpeakingSkill/Result";
import { Toaster } from "react-hot-toast";
import { SplashScreen } from "./screens/Splash/Splash";
import { ChatBot, ChatBotResult } from "./screens/ChatBot";

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
    path: "/skill-builder/speaking",
    element: <SpeakingSkill />,
  },
  {
    path: "/skill-builder/listening/:id/result",
    element: <ListeningSkillResult />,
  },
  {
    path: "/progress-tracker",
    element: <ProgressTracker />,
  },
  {
    path: "/skill-builder/speaking/result",
    element: <SpeakingSkillResult />,
  },
  {
    path: "/splash",
    element: <SplashScreen />,
  },
  {
    path: "/chat-bot",
    element: <ChatBot />,
  },
  {
    path: "/chat-bot/result",
    element: <ChatBotResult />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Toaster></Toaster>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
