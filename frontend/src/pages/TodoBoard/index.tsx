import React, { Suspense } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import { Audio as LoadingSpinner } from 'react-loader-spinner';
import useGetTodos from '../../lib/service/hooks/useGetTodos';

export default function TodoBoard() {
  const { data } = useGetTodos();
  const todos = data?.data;
  return (
    <section>
      <TodoInput />
      <Suspense
        fallback={
          <LoadingSpinner
            height='80'
            width='80'
            color='grren'
            ariaLabel='loading now'
          />
        }
      >
        <TodoList todos={todos} />
      </Suspense>
    </section>
  );
}
