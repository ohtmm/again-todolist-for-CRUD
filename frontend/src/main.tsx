import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import Signup from './pages/Signup';
import TodoBoard from './pages/TodoBoard';
import AuthChecker from './components/authChecker/AuthCheck';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

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

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      suspense: true,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={true} />
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);

/* TODO: add, mutate 이후 자동 업데이트가 안된다!
 (recoil 써야하나? 다시 get 함수를 한다던데,, 나는 그 함수 데이터를 안 사용해서 그런가?
  지금은 getTodos해서 props로 전달하는데,,, getTodoById로 get 함수를 전달해야 하나?)

  수정 완료?를 하고 다시 새로고침을 하면 투두 데이터가 사라져있음... */
