import { useMutation, useQueryClient } from 'react-query';
import { todoAPI } from '../api/todoAPI';

export default function useDeleteTodo() {
  const queryclient = useQueryClient();
  const deleteMutation = useMutation(todoAPI.deleteTodo, {
    onSuccess: () => {
      queryclient.invalidateQueries('todos');
    },
    onError: console.log,
  });
  return deleteMutation;
}
