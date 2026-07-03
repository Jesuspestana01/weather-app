import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router";

export const Navbar = () => {

  const [search, setSearch] = useState("")
  const navigate = useNavigate();

  const handleSearchSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!search.trim()) return;

    navigate(`/weather/${encodeURIComponent(search.trim())}`)
    setSearch("")
  }
  return (
    <nav className="navbar fixed-top transparent-bg">
      <div className="container">
        <div className="row justify-content-between w-100">
          <div className="col-7 col-md-6">
            <a className="navbar-brand text-center">Weather App</a>
          </div>
          <div className="col-5 col-md-6">
            <form className="d-flex" role="search" onSubmit={handleSearchSubmit}>
              <input
              value={search}
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={(e) => setSearch(e.target.value)}
              />
              <button className="btn btn-outline-primary d-none d-md-block" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
};
