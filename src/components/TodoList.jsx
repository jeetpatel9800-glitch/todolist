import TodoItem from './TodoItem';

function TodoList ({ todos, ...props }) {
  return (
    <div>
        {todos.length === 0 && <p>No todos available</p>}
        {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} {...props}/>
      ))}
    </div>
  )
}

export default TodoList;        


