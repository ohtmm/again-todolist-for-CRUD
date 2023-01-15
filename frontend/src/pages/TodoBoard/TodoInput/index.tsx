import React, { useState } from 'react';
import { TTodo } from '../../../types/todo';
import { v4 as uuid } from 'uuid';
import useCreateTodo from '../../../lib/service/hooks/useCreateTodo';

export default function TodoInput() {
  const [todo, setTodo] = useState<TTodo>(initialTodo);
  const createMutation = useCreateTodo();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const updated = { ...todo, [event.target.name]: event.target.value };
    setTodo(updated);
  };
  const handleAdd = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newTodo = { ...todo, id: uuid() };
    setTodo(newTodo);
    createMutation.mutate(todo);
  };
  return (
    <form onSubmit={handleAdd}>
      <input
        name='title'
        type='text'
        placeholder='타이틀을 입력하세요'
        onChange={handleChange}
      />
      <input
        name='content'
        type='text'
        placeholder='할 일을 입력하세요'
        onChange={handleChange}
      />
      <button> 추가하기 </button>
    </form>
  );
}

const initialTodo = {
  id: '',
  title: '',
  content: '',
  createdAt: '',
  updatedAt: '',
};
