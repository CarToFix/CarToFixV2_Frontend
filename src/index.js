/**
 * This is the index file with the router dom
 * The router dom is what allow to have multiple views
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import App from './App';
import Vehicle from './views/Vehicle';
import VehicleDetail from './views/VehicleDetail';
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to="Vehicle" replace />,
      },
      {
        path: "Vehicle",
        element: <Vehicle />,
      },
      {
        path: "Vehicle/:vehicleId",
        element: <VehicleDetail />,
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
