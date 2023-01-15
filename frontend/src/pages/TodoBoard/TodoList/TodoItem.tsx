import React, { useState } from 'react';
import { TTodo } from '../../../types/todo';
import TodoEdit from './TodoEdit';

interface TodoItemProps {
  todo: TTodo;
}

export default function TodoItem({ todo }: TodoItemProps) {
  const [isEdit, setIsEdit] = useState(false);
  const handleEdit = () => {
    setIsEdit(true);
  };
  const handleDelete = () => {};

  return (
    <div>
      <input type='checkbox' />
      <h3>{todo.title}</h3>
      <p>{todo.content}</p>
      {!isEdit ? (
        <button onClick={handleEdit}> 수정하기 </button>
      ) : (
        <TodoEdit setIsEdit={setIsEdit} todo={todo} />
      )}
      <button onClick={handleDelete}> 삭제하기 </button>
    </div>
  );
}
