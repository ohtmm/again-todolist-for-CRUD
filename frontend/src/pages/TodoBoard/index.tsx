import React from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

export default function TodoBoard() {
  return (
    <section>
      <TodoInput />
      <TodoList />
    </section>
  );
}
