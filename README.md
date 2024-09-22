# React Dashboard Project

This project is a dashboard website built with React, Tailwind CSS, and Ant Design.

## Deployed Link

Check out the live version of the dashboard here: [React Dashboard](https://dashboard-assignment-ten-ivory.vercel.app/)

## Prerequisites

Before you begin, ensure you have the following installed on your system:
- Node.js (version 14.0.0 or later)
- npm (usually comes with Node.js)

## Setting Up the Project

1. Clone the repository:
   ```
   git clone https://github.com/shambhavits16/dashboard-assignment
   ```

2. Navigate to the project directory:

3. Install the dependencies:
   ```
   npm install
   ```

## Running the Project

1. To start the development server, run:
   ```
   npm run dev
   ```

2. Open your browser and visit `http://localhost:port-no` to view the dashboard.
3. also `/orders` is the route for orders list page.

## Building for Production

To create a production build, run:
```
npm run build
```

The built files will be in the `build` directory.

## Managing Dark and Light Mode

One of the interesting challenges I faced while building this dashboard was implementing a dark/light mode toggle. Here's how I approached it:

### The Challenge

I wanted to create a simple system where users could switch between dark and light modes easily. The goal was to have a toggle that would immediately change the appearance of the dashboard without requiring a page reload.

### The Solution

To tackle this, I decided to use React's useState hook. This approach allowed me to manage the theme state at the component level, which was sufficient for my needs in this project.

Here's a brief overview of my approach:

1. State Management: I used the useState hook to create a state variable for the current theme. This state would toggle between 'light' and 'dark'.

2. Toggle Function: I created a simple function that would switch the theme state when called. This function was tied to a button in the user interface.

3. CSS Classes: Instead of using CSS variables, I opted for a simpler approach with two sets of CSS classes - one for light mode and one for dark mode. The active set of classes would be determined by the current theme state.

4. Applying the Theme: In my main App component, I used the theme state to conditionally apply the appropriate CSS class to the root element. This allowed the theme change to cascade down to all child components.


The biggest challenge was ensuring that all components responded correctly to the theme change. This required careful planning of the CSS structure and making sure that all color-related styles were included in the theme-specific classes.

In future iterations, I might consider expanding this to use Context API for global state management, and localStorage for persisting user preferences. However, for the current scope of the project, the useState approach served the purpose well and kept the implementation simple and manageable.
