const unitIdToBannerType = (unitId: string): string => {
    const mapping: Record<string, string> = {
        PUBLIC_TEST_UNIT_ID_375_80: "Banner_375_80",
        PUBLIC_TEST_UNIT_ID_NATIVE: "NATIVE",
    };

    return mapping[unitId] || "UNKNOWN";
};

const bannerTypeToUnitId = (bannerType: string): string => {
    const mapping: Record<string, string> = {
        Banner_375_80: "PUBLIC_TEST_UNIT_ID_375_80",
        NATIVE: "PUBLIC_TEST_UNIT_ID_NATIVE",
    };

    return mapping[bannerType] || "UNKNOWN";
};

export { unitIdToBannerType, bannerTypeToUnitId };
