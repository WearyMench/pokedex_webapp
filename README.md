# Pokédex Web Application

A modern web application built with React and Vite that allows users to browse, search, and view detailed information about Pokémon using data fetched from the [PokeAPI](https://pokeapi.co/).

## Features

- **Pokédex Browsing**: Browse through a paginated list of Pokémon, viewing 24 Pokémon per page.
- **Search Functionality**: Search for Pokémon by name or National Pokédex number.
- **Pokémon Details**: View detailed information about each Pokémon, including its image, types, height, weight, abilities, and base stats.
- **Responsive Design**: The application is fully responsive and works well on both desktop and mobile devices.
- **Modern UI**: Uses Framer Motion for smooth transitions and animations, and Recharts for data visualization.

## Technologies Used

- **Frontend**: React, React Router, Framer Motion, Recharts
- **Build Tool**: Vite
- **Deployment**: GitHub Pages

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/pokedex.git
   cd pokedex
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:5173`.

## Deployment

The application is configured to work with GitHub Pages at `wearymench.github.io/pokedex_webapp/`. To deploy:

1. **Using the deploy script (recommended):**

   ```bash
   npm run deploy
   # or
   yarn deploy
   ```

2. **Manual deployment:**
   ```bash
   npm run build
   # Then upload the contents of the 'dist' folder to your GitHub Pages branch
   ```

### Important Notes

- The application is configured for the specific repository name `pokedex_webapp`
- SPA routing is handled automatically for GitHub Pages
- If you rename the repository, update the `base` path in `vite.config.js` and all route paths accordingly
- The application will be available at: https://wearymench.github.io/pokedex_webapp/

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [PokeAPI](https://pokeapi.co/) for providing the Pokémon data.
- [Framer Motion](https://www.framer.com/motion/) for animations.
- [Recharts](https://recharts.org/) for data visualization.
