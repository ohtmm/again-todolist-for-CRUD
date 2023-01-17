import { useMutation, useQueryClient } from 'react-query';
import { todoAPI } from '../api';

export default function useDeleteTodo() {
  const queryclient = useQueryClient();
  const deleteMutation = useMutation(todoAPI.deleteTodo, {
    onSuccess: () => {
      queryclient.invalidateQueries('todos');
    },
  });
  return deleteMutation;
}
