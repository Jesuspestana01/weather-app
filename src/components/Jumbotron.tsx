interface JumbotronProps {
  title: string;
  description: string;
  buttonLabel: string;
}

export const Jumbotron = ({
  title,
  description,
  buttonLabel,
}: JumbotronProps) => {
  return (
    <div className="mt-5 px-4 py-5 mb-4 bg-body-tertiary">
      <div className="container-fluid py-2">
        <div className="row align-items-center g-5">          
          <div className="col-md-7 col-12">
            <h1 className="display-4 fw-extrabold text-md-start text-center mb-3 tracking-tight">
              {title || "Title"}
            </h1>
            <p className="fs-5 text-muted text-md-start text-center mb-4 lead">
              {description || "Description"}
            </p>
            <div className="d-flex justify-content-center justify-content-md-start">
              <button className="btn btn-primary btn-lg px-4 shadow-sm fw-medium" type="button">
                {buttonLabel || "Button"}
              </button>
            </div>
          </div>

          <div className="col-md-5 col-12 d-none d-md-block">
            <img
              style={{ height: "20rem", objectFit: "cover" }}
              className="w-100 n-shadow rounded-3"
              alt="Weather presentation illustration"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFdE8BYhl24xpsMwW2l3oFUKVdnbUerSCrjlLRhYS51a2Tg79FTNiNeus&s=10"
            />
          </div>

        </div>
      </div>
    </div>
  );
};