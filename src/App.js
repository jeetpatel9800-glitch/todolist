import './App.css';
import { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {

  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("Low-High");

  const addTodos = (todo) => {
    setTodos([...todos, todo]);
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) => 
        todo.id === id ? {...todo, completed: !todo.completed} : todo
      )
    );
  }

  const editTodo = (id, updatedTodo) => {
    setTodos(
      todos.map(todo => (todo.id === id ? updatedTodo : todo))    
    );
  }

  const filteredTodos = todos.filter((todo) => {
    if (filter === "Active") return !todo.completed;
    if (filter === "Completed") return todo.completed;
    return true;
  });

  const priorityOrder = { Low: 1, Medium: 2, High: 3 };

  const sortedTodos = [...filteredTodos].sort((a, b) => 
    sort === "Low-High"
      ? priorityOrder[a.priority] - priorityOrder[b.priority]
      : priorityOrder[b.priority] - priorityOrder[a.priority]
  );

  return (
    <div className="App">
        
      <h1>Todo List</h1>
      
      <TodoForm addTodo={addTodos} />

      <div className='filter-sort'>

          <select onChange={(e) => setFilter(e.target.value)}>
            <option>All</option>
            <option>Active</option>
            <option>Completed</option>
          </select>

          <select onChange={(e) => setSort(e.target.value)}>
            <option value="Low-High">Low to High</option>
            <option value="High-Low">High to Low</option>
          </select>

      </div>

      <TodoList 
        todos={sortedTodos} 
        deleteTodo={deleteTodo}
        toggleComplete={toggleComplete}
        editTodo={editTodo}  
      />

    </div>
  );
}

export default App;
