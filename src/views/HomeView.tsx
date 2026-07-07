import { SearchBar } from "../components/ui/SearchBar";

const HomeView = () => {
  return (
    <section className="container d-flex align-items-center justify-content-center" style={{height: "95vh"}}>
      <div className="row">
        <div className="col">
          <div className="d-flex justify-content-center align-items-center">
            <div
              className="text-center p-4"
              style={{ maxWidth: "700px", width: "100%" }}
            >
              <h1>Weather, simplified</h1>
              <p className="lead">
                A simple, responsive weather dashboard webapp with React and
                Bootstrap, featuring real-time data fetching and global city
                search.
              </p>
              <SearchBar placeholder="Search a city..." />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeView;
