import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router";

export const Navbar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearchSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!search.trim()) return;

    navigate(`/weather/${encodeURIComponent(search.trim())}`, {viewTransition: true});
    setSearch("");
  };
  return (
    <>
      {location.pathname !== "/" ? (
        <header className="container-fluid py-4 smc-shadow">
          <div className="container">
          <div className="row d-flex justify-content-evenly align-items-center">
            <div className="col-6 col-md-6">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => navigate("/")}
              >
                Home
              </button>
              <a href="https://github.com/Jesuspestana01/weather-app" target="_blank" type="button" className="btn btn-outline-primary ms-2">
                Github
              </a>
            </div>
            <div className="col-12 col-md-6">
              <form
                className="d-flex ms-auto position-relative mt-2"
                role="search"
                onSubmit={handleSearchSubmit}
              >
                <label htmlFor="city-search" className="visually-hidden">
                  Search City
                </label>

                <input
                  id="city-search"
                  className="form-control"
                  placeholder="Search City"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />

                <button
                  type="submit"
                  className="btn btn-outline-primary ms-1 d-none d-md-block"
                >
                  Search
                </button>
              </form>
            </div>
          </div>
          </div>
        </header>
      ) : (
        <header className="container-fluid py-4 fixed-top smc-shadow">
          <div className="row">
            <div className="col d-flex justify-content-center">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => navigate("/")}
              >
                Home
              </button>
              <a href="https://github.com/Jesuspestana01/weather-app" target="_blank" type="button" className="btn btn-outline-primary ms-2">
                Github
              </a>
            </div>
          </div>
        </header>
      )}
    </>
  );
};
