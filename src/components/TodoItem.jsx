import { useState } from "react"

function TodoItem ({ todo, deleteTodo, toggleComplete, editTodo }) {
  const [isEdit, setIsEdit] = useState(false);
  const [title, setTitle] = useState(todo.text);
  const [desc, setDesc] = useState(todo.desc);
  
  const handleSave = () => {
      editTodo(todo.id, { ...todo, title, desc });
      setIsEdit(false);
  };

  return (
    <div className="todo">
      {isEdit ? 
      (
        <div>
            <input value={title} onChange={(e) => setTitle(e.target.value)} />
            <input value={desc} onChange={(e) => setDesc(e.target.value)} />
            <button onClick={handleSave}>handleSave</button>
        </div>
      ) : (
        <>
          <h3 style={{ textDecoration: todo.completed ? "line-through" : "" }}>
            {todo.title} ({todo.priority})
            </h3>
            <p>{todo.desc}</p>
            
            <button style={{background: '#b6ab123d'}} onClick={() => toggleComplete(todo.id)}>
                {todo.completed ? "Undo" : "Complete"}
            </button>

            <button style={{background: '#1168da3d'}} onClick={() => setIsEdit(true)}>Edit</button>
            <button style={{background: '#da11113d'}} onClick={() => deleteTodo(todo.id)}>Delete</button>
        </>
        )}
    </div>
    );
};

export default TodoItem
