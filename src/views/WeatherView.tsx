import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getWeatherByCity } from "../services/weatherService";
import { WeatherCard } from "../components/WeatherCard";
import { MoreInfoCards } from "../components/MoreInfoCards";

const WeatherView = () => {
  const { city } = useParams<{ city: string }>();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [weatherInfo, setWeatherInfo] = useState<any>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      if (!city) return;

      setLoading(true);
      setError(null);
      try {
        const data = await getWeatherByCity(city);
        setWeatherInfo(data);
      } catch (error) {
        setError("Could not find any data for that city");
      } finally {
        setLoading(false);
      }
    };
    fetchWeather();
  }, [city]);

  const moreInfoData = [
    {
      id: 1,
      title: "Feels Like",
      description: weatherInfo?.weather?.main?.feels_like,
      symbol: "°",
    },
    {
      id: 2,
      title: "Humidity",
      description: weatherInfo?.weather?.main?.humidity,
      symbol: "%",
    },
    {
      id: 3,
      title: "Pressure",
      description: weatherInfo?.weather?.main?.pressure,
      symbol: "hPa",
    },
    {
      id: 4,
      title: "Wind",
      description: weatherInfo?.weather?.wind?.speed,
      symbol: "(kts)",
    },
  ];

  return (
    <section
      className="container d-flex flex-column justify-content-between mt-4 mt-md-3"
      style={{ height: "80vh" }}
    >
      {loading ? (
        <div className="w-100">
          <div className="row mb-4">
            <div className="col">
              <WeatherCard
                name={weatherInfo?.location?.name}
                country={weatherInfo?.location?.country}
                weather={weatherInfo?.weather?.weather}
                main={weatherInfo?.weather?.main}
                skeleton={true}
              />
            </div>
          </div>

          <div className="row">
            <div className="col">
              <MoreInfoCards
                data={moreInfoData}
                skeleton={true}
                weather={weatherInfo?.weather?.weather}
              />
            </div>
          </div>
        </div>
      ) : error ? (
        <div className="text-center py-5 px-3 w-100">
          <h1 className="h3 text-warning">
            Could not find weather information for that city.
          </h1>
        </div>
      ) : (
        <div className="w-100">
          <div className="row mb-4">
            <div className="col">
              <WeatherCard
                name={weatherInfo?.location?.name}
                country={weatherInfo?.location?.country}
                weather={weatherInfo?.weather?.weather}
                main={weatherInfo?.weather?.main}
                skeleton={false}
              />
            </div>
          </div>

          <div className="row">
            <div className="col">
              <MoreInfoCards
                data={moreInfoData}
                skeleton={false}
                weather={weatherInfo?.weather?.weather}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default WeatherView;
