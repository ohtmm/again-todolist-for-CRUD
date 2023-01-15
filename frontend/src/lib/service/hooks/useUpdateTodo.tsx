import React from 'react';
import { useMutation } from 'react-query';
import { todoAPI } from '../api/todoAPI';

export default function useUpdateTodo() {
  const updateMutation = useMutation(todoAPI.updateTodo, {
    onMutate: console.log,
    onSettled: console.log,
  });
  return updateMutation;
}
