# SkyCast - Simple Weather Reporter 🌤

SkyCast is a simple and elegant web application that displays the current weather and forecasts for various locations. Initially focused on Colombo, Sri Lanka, it now supports searching for weather information worldwide.

## ✨ Features

*   **Current Weather Display:** Shows real-time temperature, humidity, wind speed, UV index, "feels like" temperature, and weather conditions.
*   **Location Search:** Users can search for weather information for any city worldwide using an autocomplete search bar.
*   **7-Day Forecast:** Displays a concise 7-day weather forecast.
*   **Hourly Forecast:** Provides an hourly breakdown for the selected day.
*   **Today's Highlights:** Key metrics like Sunrise/Sunset times, UV Index, Chance of Rain, and Visibility.
*   **Responsive Design:** User interface adapts to different screen sizes (desktop and mobile).
*   **Dark/Light Mode:** Theme toggling for user preference.
*   **Mobile-First Bottom Navigation:** Easy navigation on smaller devices.
*   **Secure API Key Handling:** Utilizes Next.js API Routes to protect the external weather API key.
*   **Loading & Error States:** Provides user feedback during data fetching and handles API errors gracefully.

## 🛠️ Technologies Used

*   **Frontend:**
    *   [Next.js](https://nextjs.org/) (React Framework)
    *   [React](https://reactjs.org/)
    *   [TypeScript](https://www.typescriptlang.org/)
    *   [Material-UI (MUI)](https://mui.com/) for UI components and styling
*   **API:**
    *   [WeatherAPI.com](https://www.weatherapi.com/) for weather data
*   **Deployment:**
    *   [Vercel](https://vercel.com/) (or your chosen platform)
*   **Version Control:**
    *   [Git](https://git-scm.com/) & [GitHub](https://github.com/)
*   **Linting/Formatting:**
    *   ESLint, Prettier (usually part of Next.js setup)

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

*   [Node.js](https://nodejs.org/) (Version 18.x or later recommended)
*   [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Sandalu2001/skycast.git 
    cd webapp 
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Set up Environment Variables:**
    *   You'll need a free API key from [WeatherAPI.com](https://www.weatherapi.com/).
    *   Create a `.env.local` file in the root of your project (e.g., alongside `package.json`).
    *   Add your API key to the `.env.local` file:
        ```env
        WEATHER_API_KEY=your_weatherapi_com_api_key_here
        ```
    *   **Note:** The `.env.local` file is included in `.gitignore` and should not be committed to the repository.

4.  **Run the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```
    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Building for Production

```bash
npm run build
npm run start
# or
yarn build
yarn start
