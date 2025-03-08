import Header from "../../components/atoms/Header";
import { Meta, StoryObj } from "@storybook/react";
import { useDarkStore } from "../../store/darkStore";

const meta: Meta<typeof Header> = {
    title: "Atoms/Header",
    component: Header,
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {
    decorators: [
        (Story) => {
            useDarkStore.setState({ isDarkMode: false });
            return (
                <div style={{ height: "100px" }}>
                    <Story />
                </div>
            );
        },
    ],
};
