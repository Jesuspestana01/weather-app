export const Navbar = () => {
  return (
    <nav className="navbar fixed-top transparent-bg">
      <div className="container">
        <div className="row justify-content-between w-100">
          <div className="col-7 col-md-6">
            <a className="navbar-brand text-center">Weather App</a>
          </div>
          <div className="col-5 col-md-6">
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
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
