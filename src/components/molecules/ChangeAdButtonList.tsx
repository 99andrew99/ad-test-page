import { useAdStore } from "../../store/adStore";
import ChangeAdButton from "../atoms/ChangeAdButton";

export default function ChangeAdButtonList() {
    const { setUnitId } = useAdStore();

    return (
        <div className="w-full mt-[84px] grid grid-cols-1 lg:grid-cols-2 gap-y-[20px] place-items-center">
            <ChangeAdButton
                text="배너 광고로 변경"
                onClick={() => setUnitId("PUBLIC_TEST_UNIT_ID_375_80")}
            />
            <ChangeAdButton
                text="네이티브 광고로 변경"
                onClick={() => setUnitId("PUBLIC_TEST_UNIT_ID_NATIVE")}
            />
        </div>
    );
}
