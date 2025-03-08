import { render, fireEvent } from "@testing-library/react";
import MaterialDesignSwitch from "./MaterialDesignSwitch";
import { useDarkStore } from "../../store/darkStore";

jest.mock("react-switch", () => {
    return function MockSwitch(props: {
        checked: boolean;
        onChange: (checked: boolean) => void;
    }) {
        return (
            <input
                type="checkbox"
                checked={props.checked}
                onChange={() => props.onChange(!props.checked)}
                data-testid="switch-mock"
            />
        );
    };
});

jest.mock("../../store/darkStore", () => ({
    useDarkStore: jest.fn(),
}));

describe("MaterialDesignSwitch 렌더링 테스트", () => {
    it("라이트 모드와 다크 모드간 전환 테스트", () => {
        const setIsDarkMode = jest.fn();

        (useDarkStore as unknown as jest.Mock).mockReturnValue({
            isDarkMode: false,
            setIsDarkMode,
        });

        const { getByTestId, rerender } = render(<MaterialDesignSwitch />);

        const switchElement = getByTestId("switch-mock");
        expect((switchElement as HTMLInputElement).checked).toBe(false);

        fireEvent.click(switchElement);

        expect(setIsDarkMode).toHaveBeenCalledWith(true);

        (useDarkStore as unknown as jest.Mock).mockReturnValue({
            isDarkMode: true,
            setIsDarkMode,
        });

        rerender(<MaterialDesignSwitch />);

        expect((getByTestId("switch-mock") as HTMLInputElement).checked).toBe(
            true
        );
    });
});
