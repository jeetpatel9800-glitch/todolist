import { useState } from "react";
    
function TodoForm ({ addTodo }) {    
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [priority, setPriority] = useState("Low");

    const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !desc) {
        alert("title");
        return;
    }

    addTodo({
        id: Date.now(),
        title,
        desc,
        priority,
        completed: false,
    });
    
    setTitle("");
    setDesc("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                placeholder="Enter title"
                value={title} 
                onChange={(e) => setTitle(e.target.value)}
            />

            <input 
                placeholder="Enter description"
                value={desc} 
                onChange={(e) => setDesc(e.target.value)}
            />
            
            <select onChange={(e) => setPriority(e.target.value)}>
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
            </select>

            <button style={{ backgroundColor: '#4CAF50', color: 'white', marginTop: '20px', padding: '10px 20px', border: 'none', borderRadius: '4px' }}>Add Todo</button>
        </form>
        );
    };

export default TodoForm;
