import type { WeatherData } from "../types/weather";

export const BigCard = ({ main, weather, name, country }: WeatherData) => {
  return (
    <div className="container w-100 mt-5">
      {/* country and city */}
      <div className="row justify-content-center">
        <div className="col">
          <div className="row">
            <div className="col">
              <p className="text-center fs-3 fw-medium m-0">
                {name} - {country}
              </p>
            </div>
          </div>
          {/* temperature */}
          <div className="row">
            <div className="col">
              <p className="ps-3 text-center fw-bold text-black" style={{fontSize:"5rem"}}>{`${Math.ceil(main.temp)}°`}</p>
            </div>
          </div>
          {/* highs and lows */}
          <div className="row">
            <div className="col d-flex justify-content-center text-center fs-3 fw-medium mb-1">
              <p className="m-0">{`High:${Math.ceil(main.temp_max)}°`}</p>
              <p className="m-0">{`Low:${Math.ceil(main.temp_min)}°`}</p>
            </div>
          </div>
          {/* weather */}
          <div className="row">
            <div className="col">
              <p className="text-center fs-3 fw-medium m-0">{weather[0].main}</p>
              <p className="text-center fs-4 fw-medium">{weather[0].description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
