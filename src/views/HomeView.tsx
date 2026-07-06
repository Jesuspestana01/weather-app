import { Footer } from "../components/ui/Footer";
import { SearchBar } from "../components/ui/SearchBar";

const HomeView = () => {
  return (
    <div className="d-flex flex-column justify-content-between vh-100 p-3 bg-white">
      <div className="invisible">Header Spacer</div>
      <div className="d-flex justify-content-center align-items-center">
        <div
          className="text-center p-4"
          style={{ maxWidth: "700px", width: "100%" }}
        >
          <h1>Weather, simplified</h1>
          <p className="lead">
            A simple, responsive weather dashboard webapp with React and
            Bootstrap, featuring real-time data fetching and global city search.
          </p>
        <SearchBar placeholder="Search a city..."/>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default HomeView;
