# MealDB React App

This project is a web application for browsing and searching recipes, built using [Create React App](https://github.com/facebook/create-react-app) and React. It utilizes the [TheMealDB API](https://www.themealdb.com/) to fetch meal data, categories, and detailed recipes.

## Features

- **Browse Meals**: View a variety of meals with images, descriptions, and area of origin.
- **Meal Details**: Click on any meal to view its full details, including recipe instructions, category, area, and a link to a YouTube video (if available).
- **Search Functionality**: Search for meals by name in real time.
- **Category Browsing**: Browse meals by category (e.g., Beef, Vegetarian, etc.).
- **Responsive Design**: Works well on desktop and mobile devices.
- **Modern UI**: Built with React Bootstrap for a clean and modern interface.

## Getting Started

### Prerequisites

- Node.js (v12 or higher)
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/tafsiruzzaman/react-mealdb.git
   cd react-mealdb
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Available Scripts

In the project directory, you can run:

- `npm start`  
  Runs the app in the development mode.  
  Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

- `npm test`  
  Launches the test runner in the interactive watch mode.

- `npm run build`  
  Builds the app for production to the `build` folder.

- `npm run eject`  
  **Note: this is a one-way operation. Once you `eject`, you can’t go back!**

### Folder Structure

- `src/components/` — Contains React components such as Home, Meals, Meal, MealDetail, Categories, and NotFound.
- `src/index.js` — Entry point for the application.
- `src/index.css` — Global styles.

## Project Structure

- **Home Page:** Brief introduction and featured recipes.
- **Meals Page:** Search and browse all meals.
- **Meal Details:** Detailed view for each meal, including instructions and a YouTube recipe link.
- **Categories:** Browse by meal categories.

## API

Data is fetched from [TheMealDB API](https://www.themealdb.com/api.php). No API key required.

## Learn More

- [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started)
- [React documentation](https://reactjs.org/)
- [TheMealDB API docs](https://www.themealdb.com/api.php)

## License

This project is open source and available under the [MIT License](LICENSE).
