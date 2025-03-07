import useAd from "../../hooks/useAd";
import AdCard from "../atoms/AdCard";

interface AdCardList {
    unitId: string;
    count: number;
}

export default function AdCardList({ unitId, count }: AdCardList) {
    const { data, isLoading, error } = useAd(unitId, count);

    if (error) {
        alert("오류");
    }

    return (
        <div>
            <span>{isLoading ? "로딩중" : null}</span>

            {data?.map((result, idx) => (
                <AdCard key={idx} adResult={result} />
            ))}
        </div>
    );
}
