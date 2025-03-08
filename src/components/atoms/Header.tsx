import { useDarkStore } from "../../store/darkStore";
import MaterialDesignSwitch from "./MaterialDesignSwitch";

export default function Header() {
    const { isDarkMode } = useDarkStore();
    return (
        <div
            className={`fixed w-full h-[64px] border-b-1 border-gray-200 ${
                isDarkMode ? "bg-black/90 text-white" : "bg-white/90"
            }  backdrop-blur-3xl z-10 flex items-center px-[20px] justify-between`}
        >
            <span className="text-[20px] font-semibold cursor-pointer">
                광고 페이지
            </span>
            <MaterialDesignSwitch />
        </div>
    );
}
