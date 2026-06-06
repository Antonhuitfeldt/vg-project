# Golf Tournament Tracker

  A small web application that visualizes statistics from the PGA Tour's latest
  finished tournament with leaderboard, prize money and player earnings, and lists
  upcoming events for the season.

  ## Features

  - Leaderboard for the latest finished tournament
  - Tournament info (winner's share, FedEx Cup points, total purse)
  - Player earnings, either as pie chart or line chart
  - List of upcoming events for the current year

  ## Built with

  - React - (https://react.dev/) + Vite — application framework and build tool
  - Chart.js - (https://www.chartjs.org/) (via `react-chartjs-2`) — data visualization
  - Anime.js - (https://animejs.com/) — animations
  - Axios - (https://axios-http.com/) — HTTP requests
  - Tailwind CSS - (https://tailwindcss.com/) — styling

  ## API

  Live Golf Data API - (https://rapidapi.com/slashgolf/api/live-golf-data)
  You need your own API key to run the project.

  ## Getting started

  ### Prerequisites

  - Node.js - (https://nodejs.org/) (version 18 or later)
  - A free RapidAPI account with a key for the Live Golf Data API

  ### Installation

  1. Clone the repository:

  2. Install dependencies:
     ```bash
     npm install
     ```

  3. Create a `.env` file in the project root and add your API key:
     ```env
     VITE_RAPIDAPI_KEY=your_api_key_here
     ```

  4. Start the development server:
     ```bash
     npm run dev
     ```

  ## Author

  - Anton Huitfeldt
