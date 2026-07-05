export interface GeoLocation {
    name: string;
    lat: number;
    lon: number;
    country: string;
}

export interface WeatherData {
    main: {
        temp: number;
        humidity: number;
        feels_like: number;
    };
    weather: Array<{
        main: string;
        description: string;
        icon: string;
    }>;
    name: string;
    country: string;
}