import { LoFiUxPagination } from ".";

export default {
    title: "Components/LoFiUxPagination",
    component: LoFiUxPagination,
    argTypes: {
        variant: {
            options: ["simple", "text", "button", "slide"],
            control: { type: "select" },
        },
    },
};

export const Default = {
    args: {
        variant: "simple",
        className: {},
        rectangleClassName: {},
        rectangleClassNameOverride: {},
        hasRectangle: true,
    },
};
