import { HistoryCard } from ".";

export default {
  title: "Components/HistoryCard",
  component: HistoryCard,
  argTypes: {
    category: {
      options: ["writing", "speaking", "listening", "reading"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    category: "writing",
    className: {},
  },
};
