import TodoHeader from '../components/todo/TodoHeader.jsx';
import TodoList from '../components/todo/TodoList.jsx';
import { useAllTodo } from '../hooks/useTodo.js';

export default function TodoPage() {
  const { data: todos } = useAllTodo();
  return (
    <div className='space-y-6'>
      <TodoHeader />
      <TodoList todos={todos} />
    </div>
  );
}
