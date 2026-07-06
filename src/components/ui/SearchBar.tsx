import { ArrowRightIcon } from "@heroicons/react/20/solid";
import type { SearchBarProps } from "../../types/components";
import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router";

export const SearchBar = ({placeholder} : SearchBarProps) => {
    const [search, setSearch] = useState("");
    const navigate = useNavigate();
  
    const handleSearchSubmit = (e: FormEvent) => {
      e.preventDefault();
      if (!search.trim()) return;
  
      navigate(`/weather/${encodeURIComponent(search.trim())}`);
      setSearch("");
    };

  return (
    <form
            className="d-flex ms-auto"
            role="search"
            onSubmit={handleSearchSubmit}
          >
            <label htmlFor="city-search" className="visually-hidden">
              Search City
            </label>
            <input
              id="city-search"
              className="form-control search-bar"
              placeholder={placeholder}
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
            <button
              type="submit"
              className="btn btn-outline-primary d-none d-md-block" style={{borderRadius:"0px 30px 30px 0"}}
            >
              <ArrowRightIcon style={{height: "1.25rem", width: "1.25rem"}}/>
            </button>
          </form>
  );
};
