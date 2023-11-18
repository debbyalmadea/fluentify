import { Button } from ".";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    hierachy: {
      options: ["primary", "secondary"],
      control: { type: "select" },
    },
    type: {
      options: ["icon-only", "outline", "default"],
      control: { type: "select" },
    },
    size: {
      options: ["large", "medium", "small"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    firstIcon: false,
    trilingIcon: false,
    realText: false,
    hierachy: "primary",
    type: "icon-only",
    size: "large",
    className: {},
    divClassName: {},
    text: "Teks",
  },
};
