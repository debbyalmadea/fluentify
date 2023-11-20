import { MessageItem } from ".";

export default {
  title: "Components/MessageItem",
  component: MessageItem,
  argTypes: {
    property1: {
      options: ["my-own", "other-user"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "my-own",
    className: {},
    divClassName: {},
    text: "Message content goes here",
  },
};
