import useAd from "../../hooks/useAd";
import { useAdStore } from "../../store/adStore";
import AdCard from "../atoms/AdCard";

export default function AdCardList() {
    const { unitId, count } = useAdStore();
    const { data, isLoading, error } = useAd(unitId, count);

    if (error) {
        console.log("오류가 발생했습니다.");
        return null;
    }

    return (
        <div className="w-full mt-[20px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-[50px] place-items-center">
            {isLoading ? <span>로딩중</span> : null}

            {data?.map((result, idx) => (
                <AdCard key={idx} adResult={result} />
            ))}
        </div>
    );
}
