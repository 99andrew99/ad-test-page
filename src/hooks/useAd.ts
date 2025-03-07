import axios from "axios";
import { AdResult } from "../types/Ad";
import { useQuery } from "@tanstack/react-query";
import { unitIdToBannerType } from "../lib/utils";

export default function useAd(unitId: string, count: number) {
    const fetchAd = async (): Promise<AdResult[]> => {
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
        );
        const result = await Promise.all(requests);
        return result.map((res) => res.result);
    };

    return useQuery<AdResult[]>({
        queryKey: [unitIdToBannerType(unitId), unitId, count],
        queryFn: fetchAd,
        staleTime: 30000,
    });
}
