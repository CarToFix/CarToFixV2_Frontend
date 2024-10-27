
/**
 * This is the index file with the router dom
 * The router dom is what allow to have multiple views
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import App from './App';
import Budget from './views/Budget';
import BudgetDetail from './views/BudgetDetail';
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to="Budget" replace />,
      },
      {
        path: "Budget",
        element: <Budget />,
      },
      {
        path: "Budget/:budgetId",
        element: <BudgetDetail />,
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
