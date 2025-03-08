import MaterialDesignSwitch from "../../components/atoms/MaterialDesignSwitch";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof MaterialDesignSwitch> = {
    title: "Atoms/MaterialDesignSwitch",
    component: MaterialDesignSwitch,
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof MaterialDesignSwitch>;

export const Default: Story = {};
