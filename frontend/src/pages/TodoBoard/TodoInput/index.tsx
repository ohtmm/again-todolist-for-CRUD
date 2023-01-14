import React, { useState } from 'react';
import { TTodo } from '../../../types/todo';
import { v4 as uuid } from 'uuid';

export default function TodoInput() {
  const [todo, setTodo] = useState<TTodo>({
    id: '',
    content: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const todoContent = { ...todo, content: value };
    setTodo(todoContent);
  };
  const handleAdd = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const uid = uuid();
    const newTodo = { ...todo, id: uid };
    setTodo(newTodo);
    console.log(todo);
  };
  return (
    <form onSubmit={handleAdd}>
      <input
        type='text'
        placeholder='할 일을 입력하세요'
        onChange={handleChange}
      />
      <button> 추가하기 </button>
    </form>
  );
}
