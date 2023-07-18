import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';

const router = createBrowserRouter([
  {
    path: '/app3',
    element: <div>Hello world!</div>,
  },
  { path: '/app3/app', element: <App /> },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
