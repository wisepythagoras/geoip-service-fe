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

export type ApiResponse = {
    success: boolean;
    status: string;
    data: any;
};
