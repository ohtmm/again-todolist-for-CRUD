import { useMutation, useQueryClient } from 'react-query';
import { todoAPI } from '../api/todoAPI';

export default function useCreateTodo() {
  const queryclient = useQueryClient();
  const createMutation = useMutation(todoAPI.createTodo, {
    onSuccess: () => queryclient.invalidateQueries(['todos']),
    onSettled: console.log,
  });
  return createMutation;
}
