import * as React from 'react';
import './style.css';


const Test = () => {
  const [todos, setTodos] = React.useState([]);
  const [newTodo, setNewTodo] = React.useState('');
  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };
  const removeTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };
  return (
    <div>
      <h1>test add todo</h1>
      <div>
        <input
          type="text"
          placeholder="Add my task"
          value={newTodo}
          onChange={handleInputChange}
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}{' '}
            <button className="remove" onClick={() => removeTodo(index)}>
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Test;
