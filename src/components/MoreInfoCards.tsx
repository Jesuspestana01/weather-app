import type { MoreInfoCardsProps } from "../types/components";

export const MoreInfoCards = ({ titles, descriptions }: MoreInfoCardsProps) => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center text-center g-4">
        {/* card 1 */}
        <div className="col" data-aos="fade-up" data-aos-delay="100">
          <div className="card mx-auto py-4 border-0 smc-shadow" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title fs-4">{titles.title1}</h5>
              <p className="card-text fs-5">{descriptions.description1}</p>
            </div>
          </div>
        </div>

        {/* card 2 */}
        <div className="col" data-aos="fade-up" data-aos-delay="200">
          <div className="card mx-auto py-4 border-0 smc-shadow" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title fs-4">{titles.title2}</h5>
              <p className="card-text fs-5">{descriptions.description2} </p>
            </div>
          </div>
        </div>

        {/* card 3 */}
        <div className="col" data-aos="fade-up" data-aos-delay="300">
          <div className="card mx-auto py-4 border-0 smc-shadow" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title fs-4">{titles.title3}</h5>
              <p className="card-text fs-5">{`${descriptions.description3}`} / </p>
            </div>
          </div>
        </div>

        {/* card 4 */}
        <div className="col" data-aos="fade-up" data-aos-delay="400">
          <div className="card mx-auto py-4 border-0 smc-shadow" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title fs-4">{titles.title4}</h5>
              <p className="card-text fs-5">{`${descriptions.description4} (kts)`}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
