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
import { WritingSkill } from "./screens/WritingSkill";
import { WritingSkillResult } from "./screens/WritingSkill/Result/WritingSkillResult";
import { ListeningSkillResult } from "./screens/ListeningSkill/Result/ListeningSkillResult";
import { ProgressTracker } from "./screens/ProgressTracker";
import { SpeakingSkillResult } from "./screens/SpeakingSkill/Result";
import { Toaster } from "react-hot-toast";
import { SplashScreen } from "./screens/Splash/Splash";
import { ChatBot, ChatBotResult } from "./screens/ChatBot";
import { Login } from "./screens/Login/Login";
import { Register } from "./screens/Register";
import { InitialResult } from "./screens/InitialAssessment/Result";
import { InitialAssessment } from "./screens/InitialAssessment";
import { ReadingSkill } from "./screens/ReadingSkill";
import { ReadingSkillText } from "./screens/ReadingSkill/Text";
import { ReadingSkillQuestions } from "./screens/ReadingSkill/Questions/ReadingSkillQuestions";
import { ReadingSkillResult } from "./screens/ReadingSkill/Result/ReadingSkillResult";
import { Leaderboard } from "./screens/Leaderboard/Leaderboard";

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
    path: "/progress-tracker",
    element: <ProgressTracker />,
  },
  {
    path: "/skill-builder/speaking/result",
    element: <SpeakingSkillResult />,
  },
  {
    path: "/skill-builder/reading",
    element: <ReadingSkill />,
  },
  {
    path: "/skill-builder/reading/text/:id",
    element: <ReadingSkillText />,
  },
  {
    path: "/skill-builder/reading/text-revisit/:id",
    element: <ReadingSkillText revisit={true} />,
  },
  {
    path: "/skill-builder/reading/:id/question/:number",
    element: <ReadingSkillQuestions />,
  },
  {
    path: "/skill-builder/reading/:id/result",
    element: <ReadingSkillResult />,
  },
  {
    path: "/skill-builder/reading/:id/result",
    element: <ReadingSkillResult />,
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
  { path: "/login", element: <Login /> },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/initial",
    element: <InitialAssessment />,
  },
  {
    path: "/initial/result",
    element: <InitialResult />,
  },
  {
    path: "/initial/result/speaking",
    element: <SpeakingSkillResult url="/initial/result" />,
  },
  {
    path: "/initial/result/listening",
    element: <ListeningSkillResult url="/initial/result" />,
  },
  {
    path: "/leaderboard",
    element: <Leaderboard />,
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
