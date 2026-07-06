import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getWeatherByCity } from "../services/weatherService";
import { WeatherCard } from "../components/WeatherCard";
import { MoreInfoCards } from "../components/MoreInfoCards";
import { Footer } from "../components/ui/Footer";
import { backgroundWeather } from "../utility/weatherBackground"; // Importamos el mapa de fondos

const WeatherView = () => {
  const { city } = useParams<{ city: string }>();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [weatherInfo, setWeatherInfo] = useState<any>(null);

  // Get weather to set background
  useEffect(() => {
    const climateState = weatherInfo?.weather?.weather[0]?.main?.toLowerCase() || "default";
    const currentBackground = backgroundWeather[climateState] || backgroundWeather.default;

    document.body.style.background = currentBackground;
    document.body.style.transition = "background 0.5s ease";
    document.body.style.minHeight = "100vh";
    document.body.style.margin = "0";
  }, [weatherInfo]); 

  // fetch weather info to change background
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
    title4: "Wind",
  };

  const moreInfoDescriptions = {
    description1: weatherInfo?.weather?.main?.feels_like,
    description2: weatherInfo?.weather?.main?.humidity,
    description3: weatherInfo?.weather?.main?.pressure,
    description4: weatherInfo?.weather?.wind?.speed,
  };

  if (loading)
    return (
      <div className="container d-flex flex-column align-items-center vh-100 text-center p-3 text-white">
        <div className="my-auto">
          <span className="loader" style={{ borderColor: "rgba(255,255,255,0.3)", borderTopColor: "#fff" }}></span>
        </div>
        <Footer/>
      </div>
    );
  
  if (error)
    return (
      <div className="container d-flex flex-column align-items-center vh-100 text-center p-3 text-white">
        <div className="my-auto px-3">
          <h1 className="h3 text-white">Could not find weather information for that city.</h1>
          <p className="lead">Please check the spelling and try again.</p>
        </div>
        <Footer/>
      </div>
    );
  
  return (
    <div className="container d-flex flex-column vh-100 p-3 text-white">
      <div className="my-auto w-100">
        <div className="row mb-4">
          <div className="col">
            <WeatherCard
              name={weatherInfo?.location?.name}
              country={weatherInfo?.location?.country}
              weather={weatherInfo?.weather?.weather}
              main={weatherInfo?.weather?.main}
            />
          </div>
        </div>
  
        <div className="row">
          <div className="col">
            <MoreInfoCards
              titles={moreInfoTitles}
              descriptions={moreInfoDescriptions}
            />
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default WeatherView;