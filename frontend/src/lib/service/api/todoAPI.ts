import { TTodo } from '../../../types/todo';
import { api } from './api';
import { AxiosResponse } from 'axios';

export interface ItodoAPI {
  createTodo: (todo: TTodo) => void;
  // TODO: 리턴값 타입 찾기
  getTodos: () => Promise<{ data: TTodo[] }>;
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
  createTodo(todo: TTodo) {
    api.post('todos', todo).then(console.log);
  }

  getTodos(): Promise<{ data: TTodo[] }> {
    return api.get('todos').then((res) => res.data);
  }
}

export const todoAPI = new todoAPIImpl();
