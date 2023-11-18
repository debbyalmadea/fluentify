import { TopikButton } from ".";

export default {
  title: "Components/TopikButton",
  component: TopikButton,
  argTypes: {
    state: {
      options: ["selected", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    state: "selected",
    className: {},
    text: "Shopping",
  },
};
