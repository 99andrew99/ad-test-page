import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { ReactNode } from "react";
import useAd from "./useAd";
import { renderHook, waitFor } from "@testing-library/react";

const mock = new MockAdapter(axios);

const createWrapper = () => {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                retry: false,
            },
        },
    });
    return ({ children }: { children: ReactNode }) => (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
};

describe("api 테스트", () => {
    beforeEach(() => {
        mock.reset();
    });

    it("api 테스트 성공", async () => {
        const mockResponse = {
            code: 0,
            msg: "OK",
            result: {
                unit: "PUBLIC_TEST_UNIT_ID_NATIVE",
                format: "nativeAd",
                w: 360,
                h: 360,
                creativeId: "test_creative",
                advertiser: "Adrop",
                icon: "https://storage.adrop.io/public/ccvoca_512.png",
                cover: "https://storage.adrop.io/public/1200x630.png",
                advertiserURL: "https://openrhapsody.com",
                headline: "headline text",
                body: "body text",
                extra: { sampleExtraId: "sampleExtraValue" },
                profile: {
                    displayLogo:
                        "https://storage.adrop.io/public/test_templates/Native_360x360.png",
                    displayName: "dev",
                    link: "https://adrop.io",
                },
                callToAction: "Apply Now",
                accountTag: "",
                creativeTag: "",
                destinationURL:
                    "https://api-v2.adrop.io/invoke?action=AD_CLICK&txid=01HDZFM5ZWN84Z3Q6ZZWT2V2BD",
                ad: "<div>네이티브 광고</div>",
            },
        };

        mock.onGet("https://api-v2.adrop.io/request").reply(200, mockResponse);

        const { result } = renderHook(
            () => useAd("PUBLIC_TEST_UNIT_ID_NATIVE", 1),
            {
                wrapper: createWrapper(),
            }
        );

        await waitFor(() => {
            expect(result.current.isLoading).toBe(false);
        });

        expect(result.current.data?.pages[0].results).toHaveLength(1);
        expect(result.current.data?.pages[0].results[0].format).toBe(
            "nativeAd"
        );
        expect(result.current.data?.pages[0].results[0].unit).toBe(
            "PUBLIC_TEST_UNIT_ID_NATIVE"
        );
        expect(result.current.data?.pages[0].hasMore).toBe(true);
    });

    it("api 테스트 실패", async () => {
        mock.onGet("https://api-v2.adrop.io/request").networkError();

        const { result } = renderHook(
            () => useAd("PUBLIC_TEST_UNIT_ID_NATIVE", 1),
            {
                wrapper: createWrapper(),
            }
        );
        await waitFor(() => {
            expect(result.current.isError).toBe(true);
        });
    });
});
