export const Navbar = () => {
  return (
    <nav className="navbar fixed-top transparent-bg">
      <div className="container">
        <div className="row justify-content-between w-100">
          <div className="col-8">
            <a className="navbar-brand">Navbar</a>
          </div>
          <div className="col-4">
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
};
