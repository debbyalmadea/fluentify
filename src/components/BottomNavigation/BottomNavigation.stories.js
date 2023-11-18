import { BottomNavigation } from ".";

export default {
  title: "Components/BottomNavigation",
  component: BottomNavigation,
  argTypes: {
    screen: {
      options: ["home", "progress", "chat-bot", "leaderboard"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    screen: "home",
    className: {},
  },
};
