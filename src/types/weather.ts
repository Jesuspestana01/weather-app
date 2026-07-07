export interface GeoLocation {
    name: string;
    lat: number;
    lon: number;
    country: string;
}

export interface WeatherData {
    skeleton: boolean;
    main: {
        temp: number;
        humidity: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
    };
    weather: Array<{
        main: string;
        description: string;
        icon: string;
    }>;
    name: string;
    country: string;
}