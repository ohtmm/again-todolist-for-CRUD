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
  const { data, isLoading, isError } = useQuery('todos', todoAPI.getTodos);
  return { isLoading, isError, data };
}
