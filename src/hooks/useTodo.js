import { useQuery } from '@tanstack/react-query';
import { getAllTodo } from '../api/todo';

export function useAllTodo() {
  return useQuery({ queryKey: ['todos'], queryFn: getAllTodo });
}
