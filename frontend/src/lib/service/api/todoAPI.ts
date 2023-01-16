import { TTodo } from '../../../types/todo';
import { api } from './api';

export interface ItodoAPI {
  createTodo: (todo: TTodo) => Promise<{ data: TTodo }>;
  getTodos: () => Promise<{ data: TTodo[] }>;
  getTodoById: (id: string) => Promise<{ data: TTodo }>;
  updateTodo: (newTodo: TTodo) => Promise<{ data: TTodo }>;
  deleteTodo: (id: string) => Promise<{ data: null }>;
}

export class todoAPIImpl implements ItodoAPI {
  //   private readonly token: string;
  //   constructor() {
  //     const localToken = getToken();
  //     if (!localToken) {
  //       throw new Error('로그인 정보가 없습니다. 로그인 해주세요');
  //     } else {
  //       this.token = localToken;
  //     }
  //   }
  createTodo(todo: TTodo): Promise<{ data: TTodo }> {
    return api.post('todos', todo).then((res) => res.data);
  }

  getTodos(): Promise<{ data: TTodo[] }> {
    return api.get('todos').then((res) => res.data);
  }

  getTodoById(id: string): Promise<{ data: TTodo }> {
    return api.get(`todos/${id}`).then((res) => res.data);
  }

  updateTodo(newTodo: TTodo): Promise<{ data: TTodo }> {
    return api.put(`todos/${newTodo.id}`).then((res) => res.data);
  }

  deleteTodo(id: string): Promise<{ data: null }> {
    return api.delete(`todos/${id}`).then((res) => res.data);
  }
}

export const todoAPI = new todoAPIImpl();
