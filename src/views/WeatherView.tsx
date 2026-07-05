import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getWeatherByCity } from "../services/weatherService";
import { BigCard } from "../components/WeatherCard";
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
  
  const moreInfoTitles = {
    title1: "Feels Like",
    title2: "Humidity",
    title3: "Pressure",
    title4: "Wind"
  }

  const moreInfoDescriptions = {
    description1: weatherInfo?.weather?.main?.feels_like,
    description2: weatherInfo?.weather?.main?.humidity,
    description3: weatherInfo?.weather?.main?.pressure,
    description4: weatherInfo?.weather?.wind?.speed,
  }

  if (loading)
    return (
      <div className="container mt-5" style={{ height: "20rem" }}>
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
                <BigCard name={weatherInfo?.location?.name} country={weatherInfo?.location?.country} weather={weatherInfo?.weather?.weather} main={weatherInfo?.weather?.main} />
            </div>
        </div>

        <div className="row">
          <div className="col">
            <MoreInfoCards titles={moreInfoTitles} descriptions={moreInfoDescriptions}/>
          </div>
        </div>
  </div>);
};

export default WeatherView;
