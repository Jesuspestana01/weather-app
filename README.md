# Weather App

A responsive and minimalist web-based weather dashboard. It allows you to search for any city in the world and view the current weather with real-time data from [OpenWeatherMap](https://openweathermap.org/).

---

## Features

- **Global City Search** — search bar on the homepage and in the navigation bar.
- **Real-Time Data** — temperature, feels-like temperature, humidity, pressure, and wind speed.
- **Dynamic Homepage** — background with gradient based on weather conditions (sunny, cloudy, rainy, etc.).
- **Loading States (Skeleton)** — placeholders while retrieving data from the API.
- **Error Handling** — clear message when the city is not found.
- **Responsive Design** — adapted for mobile, tablet, and desktop using Bootstrap 5.

---

## Stack

| Category        | Technology                                      |
| ---------------- | ----------------------------------------------- |
| Framework        | [React 19](https://react.dev/)                  |
| Language         | [TypeScript 6](https://www.typescriptlang.org/) |
| Bundler          | [Vite 8](https://vite.dev/)                     |
| Routing          | [React Router 8](https://reactrouter.com/)      |
| Styles          | [Bootstrap 5](https://getbootstrap.com/) + SCSS |
| Icons           | [Heroicons](https://heroicons.com/)             |
| Animations      | [AOS](https://michalsnik.github.io/aos/)        |
| Weather API    | [OpenWeatherMap API](https://openweathermap.org/api) |


---

## Prerequisites

- Node.js 20 or higher
- pnpm (recommended)
- A free OpenWeatherMap API key

## Installation

1. **Clone the repository**

```bash
git clone https://github.com/Jesuspestana01/weather-app.git
cd weather-app
```

2. **Install dependencies**

```bash
pnpm install
```

3. **Configure environment variables**

Copy the example file and add your API key:
```bash
cp .env.example .env
```

Edit `.env`:

```env
VITE_API_KEY="your_api_key_here"
VITE_OPENWEATHER_URL="https://api.openweathermap.org"
```

4. **Start the development server**

```bash
pnpm dev
```

The app will be available at `http://localhost:5173`.

---

## Available Scripts

| Command      | Description                                     |
| --------------- | ------------------------------------------------ |
| `pnpm dev`      |  Starts the development server with HMR         |
| `pnpm build`    |  Compiles TypeScript and generates the production build |
| `pnpm preview`  | Serves the production build locally          |

---

## Environment variables

| Variable               | Descripion                             | Required |
| ---------------------- | ---------------------------------------- | --------- |
| `VITE_API_KEY`         | API key from OpenWeatherMap                | Yes        |
| `VITE_OPENWEATHER_URL` | Base URL of the API (OpenWeatherMap)      | Yes        |

> Variables must have the `VITE_` prefix for Vite to expose them to client code.

---

## Routes

| Route               | View       | Description                              |
| ------------------ | ------------ | ---------------------------------------- |
| `/`                | `HomeView`   | Home page with search bar   |
| `/weather/:city`   | `WeatherView`| Weather details for the indicated city |

---

## Project structure

```
weather-app/
├── public/                  # Static Assets (favicons, manifest PWA)
├── src/
│   ├── components/
│   │   ├── MoreInfoCards.tsx    # Cards of humidity, pressure, wind, etc.
│   │   ├── WeatherCard.tsx      # Main card of weather
│   │   └── ui/
│   │       ├── Footer.tsx
│   │       ├── Navbar.tsx
│   │       └── SearchBar.tsx
│   ├── services/
│   │   └── weatherService.ts    # Fetch logic to OpenWeather API
│   ├── styles/
│   │   └── index.scss           # Global styles + Bootstrap
│   ├── types/
│   │   ├── components.ts        # Types for components props
│   │   └── weather.ts           # Types of the weather API
│   ├── utils/
│   │   └── weatherBackground.ts # Gradients due to weather conditions
│   ├── views/
│   │   ├── HomeView.tsx
│   │   └── WeatherView.tsx
│   ├── index.tsx                # Entry point
│   ├── layout.tsx               # Router, Navbar, Footer, AOS
│   └── vite-env.d.ts
├── .env.example
├── index.html
├── package.json
├── pnpm-workspace.yaml
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
└── vite.config.ts
```

---

## Data Flow

1. The user enters a city in the `SearchBar` (home screen) or `Navbar` (weather view).
2. React Router navigates to `/weather/:city`.
3. `WeatherView` calls `getWeatherByCity()` in `weatherService.ts`.
4. The service makes two requests to OpenWeatherMap:
- **Geocoding API** — resolves the city name to coordinates (`lat`, `lon`).
- **Current Weather API** — retrieves the current weather in metric units.
5. The data is rendered in `WeatherCard` (summary) and `MoreInfoCards` (additional details).
--

## Main Components

### `WeatherCard`

Displays the main information: city, country, current temperature, icon based on condition (sun, cloud, rain), maximum/minimum temperatures, and description. The background changes dynamically depending on the weather using `weatherBackground.ts`.

### `MoreInfoCards`

Four cards with additional metrics:

- Feels like temperature
- Humidity
- Atmospheric pressure
- Wind speed

### `SearchBar` / `Navbar`

Accessible search forms with labels for screen readers. Navigation includes a link to the GitHub repository.

---

## API used

This project uses the free **OpenWeatherMap** API:

- [Geocoding API 1.0](https://openweathermap.org/api/geocoding-api) — city search
- [Current Weather Data 2.5](https://openweathermap.org/current) — current weather

---

## Production Build

```bash
pnpm build
```

Optimized files are generated in the `dist/` folder. To preview them locally:

```bash
pnpm preview
```

---

## Author

Jesus Pestana — [GitHub](https://github.com/Jesuspestana01)

