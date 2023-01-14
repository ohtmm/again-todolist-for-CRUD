import React from 'react';
import { TTodo } from '../../../types/todo';

interface TodoItemProps {
  todo: TTodo;
}

export default function TodoItem({ todo }: TodoItemProps) {
  const handleEdit = () => {};
  const handleDelete = () => {};
  return (
    <div>
      <input type='checkbox' />
      <h3>{todo.title}</h3>
      <p>{todo.content}</p>
      <button onClick={handleEdit}> 수정하기 </button>
      <button onClick={handleDelete}> 삭제하기 </button>
    </div>
  );
}
