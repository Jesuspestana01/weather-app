import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getWeatherByCity } from "../services/weatherService";
import { BigCard } from "../components/BigCard";

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

  if (loading)
    return (
      <div className="container" style={{ height: "20rem" }}>
        <div className="row justify-content-center align-items-center">
          <div className="col">
            <span className="loader"></span>
          </div>
        </div>
      </div>
    );

  if (error)
    return (
      <div className="container" style={{ height: "20rem" }}>
        <div className="row justify-content-center align-items-center">
          <div className="col">
            <h1>Could not find weather information for that city.</h1>
          </div>
        </div>
      </div>
    );

  return (<div className="container">
        <div className="row">
            <div className="col">
                <BigCard/>
            </div>
        </div>
  </div>);
};

export default WeatherView;
