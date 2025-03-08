import { render } from "@testing-library/react";
import Header from "./Header";
import { useDarkStore } from "../../store/darkStore";

jest.mock("../../store/darkStore", () => ({
    useDarkStore: jest.fn(),
}));

jest.mock("./MaterialDesignSwitch", () => {
    return function MockMaterialDesignSwitch() {
        return <div data-testid="material-design-switch" />;
    };
});

describe("Header 렌더링 테스트", () => {
    it("라이트 모드와 다크 모드간 전환 테스트", () => {
        (useDarkStore as unknown as jest.Mock).mockReturnValue({
            isDarkMode: false,
        });

        const { container, getByText, getByTestId, rerender } = render(
            <Header />
        );

        const headingElement = getByText("광고 페이지");
        expect(headingElement).toBeTruthy();

        const headerDiv = container.firstChild as HTMLElement;
        expect(headerDiv.classList.contains("bg-white/90")).toBe(true);
        expect(headerDiv.classList.contains("bg-black/90")).toBe(false);

        const switchElement = getByTestId("material-design-switch");
        expect(switchElement).toBeTruthy();

        (useDarkStore as unknown as jest.Mock).mockReturnValue({
            isDarkMode: true,
        });

        rerender(<Header />);

        expect(headerDiv.classList.contains("bg-black/90")).toBe(true);
        expect(headerDiv.classList.contains("bg-white/90")).toBe(false);
    });
});
