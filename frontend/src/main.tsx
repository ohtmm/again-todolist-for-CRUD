import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import Signup from './pages/Signup';
import TodoBoard from './pages/TodoBoard/index';
import AuthChecker from './components/authChecker/AuthCheck';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, path: '/login', element: <Login /> },
      { path: '/signup', element: <Signup /> },
      {
        path: '/',
        element: <AuthChecker />,
        children: [
          {
            index: true,
            element: <TodoBoard />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
