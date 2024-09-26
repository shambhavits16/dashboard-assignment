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
   ```
   cd react-dashboard-project
   ```

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
3. also `/orders` is the route for the orders list page.

## Building for Production

To create a production build, run:
```
npm run build
```

The built files will be in the `build` directory.

## Managing Dark and Light Mode

One of the interesting challenges I faced while building this dashboard was implementing a persistent dark/light mode toggle. Here's how I approached it:

### The Challenge

I wanted to create a system where users could switch between dark and light modes easily, and have their preference remembered across sessions.

### The Solution

To tackle this, I used a combination of React's useState hook and localStorage. Here's a brief overview of my approach:

1. State Management: I used the useState hook to create a state variable for the current theme.

2. Local Storage: To persist the user's theme preference, I stored the current theme in localStorage whenever it changed.

3. Initial State: When the component mounts, I checked localStorage for a saved theme preference. If none existed, I defaulted to 'light' mode.

4. Toggle Function: I created a function that would switch the theme state and update localStorage when called.

This solution allows the theme preference to persist across page reloads and browser sessions, providing a seamless experience for users.

## Implementing Subtle Animations

Another challenge I faced was adding subtle animations to create a minimal and modern look without making the interface feel heavy or overwhelming.

### The Challenge

I wanted to enhance the user experience with smooth, subtle animations that would make the dashboard feel more dynamic and engaging without sacrificing performance or creating visual clutter.

### The Solution

I implemented a variety of small, effective animations throughout the dashboard:

1. Header Animations:
   - Favorite Star: Added a subtle pulse effect when clicked.
   - Theme Icon: Implemented a smooth rotation transition when switching themes.
   - Notification Bell: Created a gentle shake animation for new notifications.

2. Sidebar Interactions:
   - Hover Effects: Applied subtle background color changes and slight scaling to improve visual feedback.
   - Selected Item: A smooth transition for the selected item indicator was added.

3. Main Dashboard:
   - Loading Animation: Implemented a staggered fade-in effect for dashboard components to create a sense of content loading progressively.
   - Bouncing Effects: Added a small, playful bounce to components when the page loads to draw attention and amuse users.

4. Order Page:
   - Hover Effects: Subtle scaling and shadow changes were created to indicate interactivity for list items.
   - Loading Effects: Implemented a shimmer effect for list items while data is being fetched.

The key to success was keeping these animations light and quick, typically lasting between 200-300 milliseconds. I used a combination of CSS transitions and keyframe animations, leveraging React's state management to trigger them at appropriate times.

This approach resulted in a modern and responsive dashboard, with just enough movement to enhance the user experience without becoming distracting. The subtle animations provide valuable visual feedback, making the interface feel more intuitive and alive.

