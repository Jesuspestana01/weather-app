import { useEffect } from "react";
import type { MoreInfoCardsProps } from "../types/components";
import { backgroundWeather } from "../utils/weatherBackground";
import AOS from "aos"

export const MoreInfoCards = ({
  data,
  skeleton = false,
  weather
}: MoreInfoCardsProps) => {

  useEffect(() => {
    AOS.refreshHard();
  }, [data]);

  if (skeleton) {
    return (
      <div className="container my-3 my-md-0 placeholder-glow">
        <div className="row justify-content-center text-center g-4">
          {[1, 2, 3, 4].map((index) => (
            <div className="col" key={index}>
              <div
                className="card mx-auto py-4 border-0 smc-shadow"
                style={{ width: "18rem" }}
              >
                <div className="card-body d-flex flex-column align-items-center justify-content-center">
                  <span
                    className="placeholder bg-secondary-subtle mb-3 rounded"
                    style={{ width: "60%", height: "1.5rem", opacity: 0.25 }}
                  ></span>
                  <span
                    className="placeholder bg-secondary-subtle rounded"
                    style={{ width: "40%", height: "1.75rem", opacity: 0.25 }}
                  ></span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="container my-3 my-md-0">
      <div className="row justify-content-center text-center g-4">
        {data.map((item, index) => (
          <div key={index} className="col">
          <div
            className="card mx-auto py-4 border-0 smc-shadow text-light"
            style={{ width: "18rem", background: backgroundWeather[weather[0]?.main?.toLowerCase()] }}
          >
            <div className="card-body">
              <h5 className="card-title fs-4">{item.title}</h5>
              <p className="card-text fs-5">
                {Math.ceil(Number(item.description))}{item.symbol}
              </p>
            </div>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
};
