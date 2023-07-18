import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';
import Home from './Home.jsx';
import About from './About.jsx';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Home></Home>,
    },
    { path: '/app', element: <App /> },
    { path: '/about', element: <About /> },
    { path: '/contact', element: <App /> },
  ],
  { basename: '/app3' }
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
