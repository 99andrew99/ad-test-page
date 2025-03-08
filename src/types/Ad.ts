/* eslint-disable @typescript-eslint/no-explicit-any */
export interface AdResult {
    // 필수
    format: string;
    unit: string;
    ad: string;
    w: number;
    h: number;

    // 선택
    creativeId?: string;
    advertiser?: string;
    icon?: string;
    cover?: string;
    advertiserURL?: string;
    headline?: string;
    body?: string;
    callToAction?: string;
    destinationURL?: string;
    profile?: any;
    extra?: any;
    accountTag?: any;
    creativeTag?: any;
}

export interface AdResponse {
    code: number;
    msg: string;
    result: AdResult;
}
