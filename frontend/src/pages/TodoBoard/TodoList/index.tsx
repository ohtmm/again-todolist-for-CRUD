import React from 'react';
import { TTodo } from '../../../types/todo';
import TodoItem from './TodoItem';

interface TodoListProps {
  todos?: TTodo[];
}

export default function TodoList({ todos }: TodoListProps) {
  return (
    <li>
      {todos?.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} />;
      })}
    </li>
  );
}
