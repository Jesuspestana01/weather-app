import { Footer } from "../components/ui/Footer";

const HomeView = () => {
  return (
    <div className="d-flex flex-column justify-content-between vh-100 p-3">
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
        </div>
      </div>
      <footer className="text-center text-muted small py-2">
        <p className="mb-0">Developed by <strong>Jesus Pestana</strong> © 2026</p>
      </footer>
    </div>
  );
};

export default HomeView;
