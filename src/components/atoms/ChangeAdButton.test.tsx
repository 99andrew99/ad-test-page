import { render } from "@testing-library/react";
import { useDarkStore } from "../../store/darkStore";
import ChangeAdButton from "./ChangeAdButton";

jest.mock("../../store/darkStore", () => ({
    useDarkStore: jest.fn(),
}));

describe("ChangeAdButton 렌더링 테스트", () => {
    it("라이트 모드와 다크 모드간 전환 테스트", () => {
        const toggleDarkMode = jest.fn();
        (useDarkStore as unknown as jest.Mock).mockReturnValue({
            isDarkMode: false,
            toggleDarkMode,
        });

        const mockOnClick = jest.fn();
        const { getByText, rerender } = render(
            <ChangeAdButton text="배너 광고로 변경" onClick={mockOnClick} />
        );

        const button = getByText("배너 광고로 변경");

        expect(button.classList.contains("bg-[#F5F3F1]")).toBe(true);
        expect(button.classList.contains("bg-white")).toBe(false);
        expect(button.classList.contains("text-black")).toBe(false);

        (useDarkStore as unknown as jest.Mock).mockReturnValue({
            isDarkMode: true,
            toggleDarkMode,
        });

        rerender(
            <ChangeAdButton text="배너 광고로 변경" onClick={mockOnClick} />
        );

        expect(button.classList.contains("bg-white")).toBe(true);
        expect(button.classList.contains("text-black")).toBe(true);
        expect(button.classList.contains("bg-[#F5F3F1]")).toBe(false);
    });
});
