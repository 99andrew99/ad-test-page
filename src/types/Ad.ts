export interface AdResult {
    // 필수
    format: string;
    unit: string;
    ad: string;
    w: number;
    h: number;

    // 선택
    advertiser?: string;
    icon?: string;
    cover?: string;
    advertiserURL?: string;
    headline?: string;
    body?: string;
    callToAction?: string;
    destinationURL?: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    accountTag?: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    creativeTag?: any;
}

export interface AdResponse {
    code: number;
    msg: string;
    result: AdResult;
}
