import ChangeAdButton from "../../components/atoms/ChangeAdButton";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ChangeAdButton> = {
    title: "Atoms/ChangeAdButton",
    component: ChangeAdButton,
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ChangeAdButton>;

export const LightMode: Story = {
    args: {
        text: "배너 광고로 변경",
        onClick: () => alert("배너 광고 변경 클릭"),
    },
};

export const DarkMode: Story = {
    args: {
        text: "네이티브 광고로 변경",
        onClick: () => alert("네이티브 광고 변경 클릭"),
    },
};
