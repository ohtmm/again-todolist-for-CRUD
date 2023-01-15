import React, { Dispatch, SetStateAction, useState } from 'react';
import useUpdateTodo from '../../../lib/service/hooks/useUpdateTodo';
import { TTodo } from '../../../types/todo';

interface TodoEditProps {
  todo: TTodo;
  setIsEdit: Dispatch<SetStateAction<boolean>>;
}

export default function TodoEdit({ todo, setIsEdit }: TodoEditProps) {
  const [editedTodo, setEditedTodo] = useState<TTodo>(todo);
  const updateMutation = useUpdateTodo();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const updated = {
      ...editedTodo,
      [event.target.name]: event.target.value,
      updatedAt: `${new Date()}`,
    };
    setEditedTodo(updated);
  };

  const handleUpdate = (event: React.FormEvent) => {
    event.preventDefault();
    setIsEdit(false);
    console.log(editedTodo);
    updateMutation.mutate(editedTodo);
  };
  return (
    <form onSubmit={handleUpdate}>
      <label htmlFor='title'>title</label>
      <input
        type='text'
        value={editedTodo.title}
        name='title'
        onChange={handleChange}
      />
      <label htmlFor='content'>content</label>
      <input
        type='text'
        value={editedTodo.content}
        name='content'
        onChange={handleChange}
      />
      <button>수정 완료</button>
    </form>
  );
}
