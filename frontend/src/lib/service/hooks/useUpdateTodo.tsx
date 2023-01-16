import React from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { todoAPI } from '../api/todoAPI';

export default function useUpdateTodo() {
  const queryclient = useQueryClient();
  const updateMutation = useMutation(todoAPI.updateTodo, {
    onMutate: () => queryclient.invalidateQueries(['todos']),
    onSettled: console.log,
  });
  return updateMutation;
}
