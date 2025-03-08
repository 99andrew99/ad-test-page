interface ChangeAdButtonProps {
    text: string;
    onClick: () => void;
}

export default function ChangeAdButton({ text, onClick }: ChangeAdButtonProps) {
    return (
        <button
            onClick={onClick}
            className="h-[50px] px-[20px] py-[10px] rounded-[16px] cursor-pointer font-semibold hover:text-white bg-[#F5F3F1] hover:bg-[#2588FF]"
        >
            {text}
        </button>
    );
}
