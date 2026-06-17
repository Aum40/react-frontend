import TodoItem from './TodoItem';

export default function TodoList({ todos }) {
  console.log('todos', todos);
  return (
    <ul className='space-y-2'>
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </ul>
  );
}
