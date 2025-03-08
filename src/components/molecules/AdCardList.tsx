import { useInView } from "react-intersection-observer";
import useAd from "../../hooks/useAd";
import { useAdStore } from "../../store/adStore";
import AdCard from "../atoms/AdCard";
import { useEffect } from "react";

export default function AdCardList() {
    const { unitId, count } = useAdStore();
    const {
        data,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        isLoading,
        error,
    } = useAd(unitId, count);

    const { ref, inView } = useInView();

    useEffect(() => {
        if (inView && hasNextPage && !isFetchingNextPage) {
            console.log("무한 스크롤");
            fetchNextPage();
        }
    }, [inView, fetchNextPage, hasNextPage, isFetchingNextPage]);

    if (error) {
        console.log("오류가 발생했습니다.");
        return (
            <p className="w-full text-center font-bold text-[50px]">
                오류가 발생했습니다.
            </p>
        );
    }

    return (
        <div className="relative w-full mt-[20px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-[50px] place-items-center">
            {isLoading ? (
                <p className="absolute top-0 mx-auto text-center z-1 font-semibold text-[20px]">
                    로딩중...
                </p>
            ) : null}

            {data?.pages.map((page, pIdx) =>
                page.results.map((result, idx) => {
                    const isLastItem =
                        pIdx === data.pages.length - 1 &&
                        idx === page.results.length - 1;

                    return isLastItem ? (
                        <div key={idx} ref={ref}>
                            <AdCard key={idx} adResult={result} />
                        </div>
                    ) : (
                        <AdCard key={idx} adResult={result} />
                    );
                })
            )}

            {isFetchingNextPage ? (
                <p className="absolute bottom-[-30px] mx-auto text-center z-1 font-semibold text-[20px]">
                    불러오는중...
                </p>
            ) : null}
        </div>
    );
}
