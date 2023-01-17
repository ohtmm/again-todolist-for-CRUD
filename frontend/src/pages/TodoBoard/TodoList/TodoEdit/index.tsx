import React, { Dispatch, SetStateAction, useState } from 'react';
import { TTodo } from '../../../../types/todo';
import useUpdateTodo from '../../../../lib/service/todo/hooks/useUpdateTodo';

interface TodoEditProps {
  todo: TTodo;
  setIsEdit: Dispatch<SetStateAction<boolean>>;
}

export default function TodoEdit({ todo, setIsEdit }: TodoEditProps) {
  const { id, title, content } = todo;
  const [editedTodo, setEditedTodo] = useState<TTodo>({ id, title, content });
  const updateMutation = useUpdateTodo();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const updated = {
      ...editedTodo,
      [event.target.name]: event.target.value,
    };
    setEditedTodo(updated);
  };

  const handleUpdate = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    updateMutation.mutate(editedTodo);
    setIsEdit(false);
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
