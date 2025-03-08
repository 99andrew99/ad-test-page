import { useDarkStore } from "../../store/darkStore";

interface ChangeAdButtonProps {
    text: string;
    onClick: () => void;
}

export default function ChangeAdButton({ text, onClick }: ChangeAdButtonProps) {
    const { isDarkMode } = useDarkStore();
    return (
        <button
            onClick={onClick}
            className={`h-[50px] px-[20px] py-[10px] rounded-[16px] cursor-pointer font-semibold hover:text-white ${
                isDarkMode ? "bg-white text-black" : "bg-[#F5F3F1]"
            }  hover:bg-[#2588FF]`}
        >
            {text}
        </button>
    );
}
