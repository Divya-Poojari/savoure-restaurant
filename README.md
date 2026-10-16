# SAVOURÉ — Premium Multi-Cuisine Restaurant Website

**Live Demo:** https://savoure-restaurant-lilac.vercel.app/

**Source Code:** https://github.com/Divya-Poojari/savoure-restaurant

## About the Project

SAVOURÉ is a modern, premium multi-cuisine restaurant website designed to deliver an elegant and engaging digital dining experience. It showcases different culinary traditions through immersive food imagery, refined typography, smooth animations, and a visually consistent interface.

The website focuses on presenting restaurant information, exploring cuisines and signature dishes, and providing a reservation interface.

## Features

- **Premium Homepage:** Cinematic hero section, restaurant story, signature dishes, and dining experience highlights.
- **Multi-Cuisine Exploration:** Dedicated pages for different cuisines, including North Indian, South Indian, Japanese, Italian, and Continental.
- **Interactive Menu:** Browse dishes and explore menu categories.
- **Menu Filtering:** Search dishes and filter by category and dietary preferences where supported.
- **Reservation Interface:** A form for entering reservation details.
- **Smooth Animations:** Animated transitions and reveal effects for a polished browsing experience.
- **Responsive Design:** Layout designed to adapt to different screen sizes.
- **Deployed Website:** Hosted on Vercel and connected to a GitHub repository.

## Tech Stack

- **React** — Component-based user interface
- **TypeScript** — Type safety and maintainable code
- **Vite** — Development server and production build tooling
- **Tailwind CSS** — Styling and responsive layouts
- **Framer Motion** — Animations and transitions
- **React Router** — Client-side page navigation
- **Lucide React** — Icons
- **Vercel** — Deployment and hosting
- **Git and GitHub** — Version control and source code management

## Getting Started

### Prerequisites

Install the following before running the project:

- Node.js (a version compatible with the project's dependencies)
- npm
- Git

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Divya-Poojari/savoure-restaurant.git
   ```

2. Navigate to the project directory:

   ```bash
   cd savoure-restaurant
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL displayed in your terminal, usually `http://localhost:5173`.

### Production Build

To generate and verify the production build, run:

```bash
npm run build
```

To preview the production build locally, run:

```bash
npm run preview
```

## Deployment

The project is deployed on Vercel and connected to the GitHub repository.

- **Live Website:** https://savoure-restaurant-lilac.vercel.app/
- **GitHub Repository:** https://github.com/Divya-Poojari/savoure-restaurant

With Git integration enabled, new pushes to the configured production branch can trigger automatic deployments.

## Project Structure

```text
savoure-restaurant/
├── public/
│   └── images/          # Static image assets
├── src/
│   ├── animations/      # Shared animation configurations
│   ├── components/      # Reusable UI components
│   ├── data/            # Cuisine and menu data
│   ├── pages/           # Homepage and cuisine pages
│   ├── App.tsx          # Application and routing
│   └── main.tsx         # Application entry point
├── index.html
├── package.json
├── vite.config.ts
└── README.md
```

*Note: The structure above is representative. Update it if your actual repository uses different files or folders.*

## Future Enhancements

- Connect the reservation form to a backend or reservation service.
- Add reservation confirmation and email notifications.
- Integrate a backend for dynamic menu and restaurant information.
- Improve accessibility and automated test coverage.

## License

This project was created as a website development project. No open-source license is specified unless one is added to the repository.
