import type { WeatherData } from "../types/weather";

export const WeatherCard = ({ main, weather, name, country }: WeatherData) => {
  return (
    <div className="container w-100 mt-5">
      {/* country and city */}
      <div className="row justify-content-center">
        <div className="col">
          <div className="row">
            <div className="col" data-aos="fade-down" data-aos-delay="100">
              <p className="text-center fs-3 fw-medium m-0">
                {name} - {country}
              </p>
            </div>
          </div>
          {/* temps */}
          <div className="row">
            <div className="col" data-aos="zoom-in" data-aos-delay="250">
              <p
                className="ps-3 text-center fw-bold text-black"
                style={{ fontSize: "5rem" }}
              >
                {`${Math.ceil(main.temp)}°`}
              </p>
            </div>
          </div>
          {/* temps highs and low */}
          <div className="row">
            <div
              className="col d-flex justify-content-center text-center fs-3 fw-medium mb-1"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <p className="m-0 me-3">{`High: ${Math.ceil(main.temp_max)}°`}</p>
              <p className="m-0">{`Low: ${Math.ceil(main.temp_min)}°`}</p>
            </div>
          </div>
          {/* weather */}
          <div className="row">
            <div className="col" data-aos="fade-up" data-aos-delay="550">
              <p className="text-center fs-3 fw-medium m-0">
                {weather[0].main}
              </p>
              <p className="text-center fs-4 fw-medium text-muted">
                {weather[0].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
