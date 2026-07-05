import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router";

export const Navbar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearchSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!search.trim()) return;

    navigate(`/weather/${encodeURIComponent(search.trim())}`);
    setSearch("");
  };
  return (
    <header className="container py-4 fixed-top">
      <div className="row d-flex justify-content-evenly align-items-center">
        <div className="col-6 col-md-6">
          <button className="btn btn-primary" onClick={() => navigate("/")}>
            Home
          </button>
          <button className="btn btn-outline-primary ms-2">Github</button>
        </div>
        <div className="col-6 col-md-6">
          <form
            className="d-flex ms-auto"
            role="search"
            onSubmit={handleSearchSubmit}
          >
            <input
              className="form-control"
              placeholder="Search City"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
            <button className="btn btn-outline-primary ms-1 d-none d-md-block">
              Search
            </button>
          </form>
        </div>
      </div>
    </header>
  );
};
