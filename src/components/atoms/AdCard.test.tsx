import { render } from "@testing-library/react";
import { AdResult } from "../../types/Ad";
import AdCard from "./AdCard";

describe("AdCard 렌더링 테스트", () => {
    it("네이티브 광고 렌더링 테스트", () => {
        const mockAd: AdResult = {
            format: "nativeAd",
            ad: "<div>네이티브 광고</div>",
        } as AdResult;

        const { container } = render(<AdCard adResult={mockAd} />);
        const adElement = container.firstChild as HTMLElement;

        expect(adElement.classList.contains("w-[360px]")).toBe(true);
        expect(adElement.classList.contains("h-[404px]")).toBe(true);

        expect(adElement.classList.contains("rounded-[16px]")).toBe(true);
        expect(adElement.classList.contains("overflow-hidden")).toBe(true);

        expect(adElement.innerHTML).toBe("<div>네이티브 광고</div>");
    });

    it("배너 광고 렌더링 테스트", () => {
        const mockAd: AdResult = {
            format: "bannerAd",
            ad: "<div>배너 광고</div>",
        } as AdResult;

        const { container } = render(<AdCard adResult={mockAd} />);
        const adElement = container.firstChild as HTMLElement;

        expect(adElement.classList.contains("w-[375px]")).toBe(true);
        expect(adElement.classList.contains("h-[80px]")).toBe(true);

        expect(adElement.classList.contains("rounded-[16px]")).toBe(true);
        expect(adElement.classList.contains("overflow-hidden")).toBe(true);

        expect(adElement.innerHTML).toBe("<div>배너 광고</div>");
    });
});
