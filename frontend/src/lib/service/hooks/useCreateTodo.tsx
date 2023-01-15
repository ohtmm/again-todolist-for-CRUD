import { useMutation } from 'react-query';
import { todoAPI } from '../api/todoAPI';

export default function useCreateTodo() {
  const createMutation = useMutation(todoAPI.createTodo, {
    onMutate: console.log,
    onSettled: console.log,
  });
  return createMutation;
}
