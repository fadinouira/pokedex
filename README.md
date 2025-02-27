# Pokédex Search App

## Overview

The Pokédex Search App allows users to search for any Pokémon by name or ID and view detailed information such as stats, moves, and evolutions. The application follows a structured architecture combining **Atomic Design** and **Feature-Based Architecture** for better scalability and maintainability.

## Features

- **Search Functionality**: Users can search for Pokémon by name, ID, or pick one randomly.
- **Pokémon Detail Page**:
  - Dynamic background color based on the Pokémon's primary type.
  - Displays Pokémon image, types, description, and stats.
  - Lists Pokémon evolutions with arrows matching the background color.
- **Error Handling**: Displays a custom error page if the Pokémon is not found.
- **Multilingual Support**: Integrated with `i18next` for localization.
- **UI Component Documentation**: Utilizes **Storybook** for isolated component testing and visualization.
- **Testing Suite**: Includes unit tests and UI testing using `Vitest`, `Testing Library`, and `Playwright`.

## Technologies Used

- **React 19** - Frontend framework for building the UI.
- **React Router 7** - Client-side routing.
- **React Hook Form** - Form handling.
- **i18next & React-i18next** - Internationalization and localization.
- **Vite** - Fast development and build tooling.
- **Storybook** - UI component documentation and testing.
- **Vitest** - Unit and integration testing framework.
- **Testing Library & Playwright** - UI testing.
- **ESLint & Prettier** - Code quality and formatting.

## Folder Structure

The project follows a combination of **Atomic Design** and **Feature-Based Architecture**:

```
src/
├── app/
│   ├── config/            # Application-level configurations
│   ├── features/
│   │   ├── pokemon/       # Pokemon feature module
│   │   │   ├── api/       # API-related code
│   │   │   ├── components/# Feature-specific components
│   │   │   ├── pages/     # Feature-related pages
│   │   │   ├── types/     # Type definitions
│   │   │   ├── utils/     # Helper functions
├── routes/                # Application routes
├── locales/               # Translations
├── pages/                 # General pages
├── shared/
│   ├── assets/            # Static assets (images, icons, css tokens, etc.)
│   ├── components/        # Reusable UI components
│   │   ├── atoms/         # Basic UI elements (buttons, inputs)
│   │   ├── molecules/     # Composed UI elements
│   ├── hooks/             # Custom React hooks
│   ├── types/             # Global type definitions
│   ├── utils/             # Shared utility functions
```

## Setup & Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/fadinouira/pokedex
   cd pokedex
   ```
2. Install dependencies using Yarn:
   ```sh
   yarn install
   ```
3. Start the development server:
   ```sh
   yarn dev
   ```
4. Run Storybook:
   ```sh
   yarn storybook
   ```
5. Run tests:
   ```sh
   yarn test
   ```
6. Build for production:
   ```sh
   yarn build
   ```

## API Integration

The app fetches Pokémon data from **PokeAPI**:

- Uses **REST API** where GraphQL lacks coverage.
- Uses simple js fetch and custom hooks.

## Testing

- **Unit & Integration Tests**: `Vitest` + `Testing Library`
- **End-to-End Tests**: `Playwright` (not developed yet)
- **Storybook Tests**: Snapshot and interaction tests
