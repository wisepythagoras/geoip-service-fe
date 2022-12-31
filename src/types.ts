export type IPRecord = {
    country: {
        iso_code: string;
        geoname_id: number;
        name: { en: string };
    };
    city: {
        geoname_id: number;
        name: { en: string };
    };
    location: {
        latitude: number;
        longitude: number;
        metro_code: number;
    };
    asn: number;
    org: string;
    ip_address: string;
};

export type ApiResponseIP = {
    success: boolean;
    status: string;
    record: IPRecord;
};

export type ApiResponseMultiIP = {
    success: boolean;
    status: string;
    records: IPRecord[];
};
