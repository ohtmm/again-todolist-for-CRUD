import { AxiosError } from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import { TTodo } from '../../../types/todo';
import { todoAPI } from '../api/todoAPI';

// export interface ITodoList {
//     results: TTodo[];
// }

type TGetTodo = {
  isLoading: boolean;
  isError: boolean;
  data?: { data: TTodo[] };
};

export default function useGetTodo(): TGetTodo {
  const { data, isLoading, isError } = useQuery('todos', todoAPI.getTodos, {
    onSuccess: (data) => console.log(data),
    onError: (e: AxiosError) => console.log(e.message),
  });
  return { isLoading, isError, data };
}
