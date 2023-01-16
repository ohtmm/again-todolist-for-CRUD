import { AxiosError } from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import { TTodo } from '../../../types/todo';
import { todoAPI } from '../api/todoAPI';

type TGetTodos = {
  isLoading: boolean;
  isError: boolean;
  data?: { data: TTodo[] };
};

type TGetTodoById = {
  data?: { data: TTodo };
};

export default function useGetTodos(): TGetTodos {
  const { data, isLoading, isError } = useQuery('todos', todoAPI.getTodos, {
    onSuccess: (data) => console.log(data),
    onError: (e: AxiosError) => console.log(e.message),
    suspense: true,
  });
  return { isLoading, isError, data };
}

// export function useGetTodoById(id: string): TGetTodoById {
//   const { data } = useQuery(['todos', id], ()=>{todoAPI.getTodoById(id)}, {
//     onSuccess: (data) => console.log('success getTodoById', data),
//   })
//   return { data}
// }
