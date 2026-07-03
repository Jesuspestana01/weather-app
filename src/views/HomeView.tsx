import { Jumbotron } from "../components/Jumbotron";

const HomeView = () => {
  const jumbotronInfo = {
    title: "Weather, simplified.",
    description:
      "Accurate, real-time weather data for your favorite cities. It’s that simple.",
    buttonLabel: "Search City",
  };
  return (
    <div className="container">
      <Jumbotron
        title={jumbotronInfo.title}
        description={jumbotronInfo.description}
        buttonLabel={jumbotronInfo.buttonLabel}
      />
    </div>
  );
};

export default HomeView;
