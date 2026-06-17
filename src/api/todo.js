import { api } from './client';

export const getAllTodo = async () => {
  const { data } = await api.get('/todos');
  console.log('dat getAllTodo', data);
  return data.todos;
};
