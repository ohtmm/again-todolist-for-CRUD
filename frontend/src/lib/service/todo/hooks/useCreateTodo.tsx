import { useMutation, useQueryClient } from 'react-query';
import { todoAPI } from '../api/index';

export default function useCreateTodo() {
  const queryclient = useQueryClient();
  const createMutation = useMutation(todoAPI.createTodo, {
    onSuccess: () => queryclient.invalidateQueries(['todos']),
  });
  return createMutation;
}
