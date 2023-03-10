import React from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { todoAPI } from '../api';

export default function useUpdateTodo() {
  const queryclient = useQueryClient();
  const updateMutation = useMutation(todoAPI.updateTodo, {
    onSuccess: () => queryclient.invalidateQueries('todos'),
  });
  return updateMutation;
}
