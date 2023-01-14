import React from 'react';
import useGetTodo from '../../../lib/service/hooks/useGetTodo';
import TodoItem from './TodoItem';

export default function TodoList() {
  const { data: todos, isLoading, isError } = useGetTodo();

  return (
    <ul>
      {isLoading ? (
        <li>loading ...</li>
      ) : (
        <li>
          {todos?.data.map((todo) => {
            return <TodoItem key={todo.id} todo={todo} />;
          })}
        </li>
      )}
    </ul>
  );
}
