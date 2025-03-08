import { AdResult } from "../../types/Ad";

interface AdCardProps {
    adResult: AdResult;
}

export default function AdCard({ adResult }: AdCardProps) {
    return (
        <div
            className="w-[360px] h-[404px] rounded-[16px] overflow-hidden"
            dangerouslySetInnerHTML={{ __html: adResult.ad }}
        />
    );
}
