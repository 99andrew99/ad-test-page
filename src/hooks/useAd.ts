import axios from "axios";
import { AdResult } from "../types/Ad";
import { useInfiniteQuery } from "@tanstack/react-query";
import { unitIdToBannerType } from "../lib/utils";

export default function useAd(unitId: string, count: number) {
    const fetchAd = async (): Promise<{
        results: AdResult[];
        hasMore: boolean;
    }> => {
        try {
            const requests = Array.from({ length: count }, () =>
                axios
                    .get("https://api-v2.adrop.io/request", {
                        params: { unit: unitId, pf: "web" },
                        headers: {
                            Authorization:
                                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjAxSEQ1UTNaOEdYTk5XRjQ2NENOV0NNQlM0OjAxSEZCTU1HRkZXUU5OMk5aVkpCNU5GUFZaIiwia2V5VHlwZSI6MSwiaWF0IjoxNzAwMTI0MDQ5LCJleHAiOjI1MzQwMjEyODAwMH0.J877rLr4xvUWqcEzsesEp_KNzO8XnHaJeESPXdABubQ",
                        },
                    })
                    .then((res) => {
                        return res.data;
                    })
                    .catch((error) => {
                        throw error;
                    })
            );
            const result = await Promise.all(requests);
            const results = result.map((res) => res.result);

            const hasMore = results.length === count;
            return {
                results: results,
                hasMore: hasMore,
            };
        } catch (error) {
            console.error("fetchAd 에러 발생", error);
            throw error;
        }
    };

    return useInfiniteQuery({
        queryKey: [unitIdToBannerType(unitId), unitId, "infinite"],
        queryFn: fetchAd,
        initialPageParam: true,
        getNextPageParam: (lastPage) => (lastPage.hasMore ? true : undefined),
        staleTime: 30000,
    });
}
