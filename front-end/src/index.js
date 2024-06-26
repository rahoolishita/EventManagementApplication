import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom/client
import App from './App';

// Get the root element from the DOM
const rootElement = document.getElementById('root');

// Create a root
const root = createRoot(rootElement);

// Render the App component to the root
root.render(<App />);
