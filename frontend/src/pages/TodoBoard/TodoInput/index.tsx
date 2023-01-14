import React, { useState } from 'react';
import { TTodo } from '../../../types/todo';
import { v4 as uuid } from 'uuid';
import { todoAPI } from '../../../lib/service/api/todoAPI';

export default function TodoInput() {
  const [todo, setTodo] = useState<TTodo>({
    id: '',
    title: '',
    content: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const updated = { ...todo, [event.target.name]: event.target.value };
    setTodo(updated);
  };
  const handleAdd = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const uid = uuid();
    const newTodo = { ...todo, id: uid };
    setTodo(newTodo);
    todoAPI.createTodo(newTodo);
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
