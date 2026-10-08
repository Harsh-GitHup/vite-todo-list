import { useState } from 'react';
import AddTodo from './AddTodo';
import TodoItem from './TodoItem';
import noTodosImage from '../assets/todo.png';

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos([{ id: Date.now(), text, completed: false }, ...todos]);
  };

  const removeTodo = (id) => {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
  };

  const removeAllCompletedTodos = () => {
    const newTodos = todos.filter(todo => !todo.completed);
    setTodos(newTodos);
  };

  const toggleTodo = (id) => {
    const newTodos = todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);
  };

  const activeTodos = todos.filter(todo => !todo.completed);
  const completedTodos = todos.filter(todo => todo.completed);

  return (
    <div className="todo-list">
      <AddTodo addTodo={addTodo} />
      
      {activeTodos.length > 0 ? (
        <div className="todos-section">
          <div className="section-header">
            <h3>Active Tasks</h3>
            <span>{activeTodos.length} remaining</span>
          </div>
          <ul>
            {activeTodos.map(todo => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={() => toggleTodo(todo.id)}
                onRemove={() => removeTodo(todo.id)}
              />
            ))}
          </ul>
        </div>
      ) : (
        <div className="no-todos-container">
          <img src={noTodosImage} alt="No active todos" className="no-todos-image" loading="lazy" />
          <p className="no-todos-text">You&apos;re all caught up!</p>
        </div>
      )}
      
      {completedTodos.length > 0 && (
        <div className="todos-section">
          <div className="section-header">
            <h3>Completed Tasks</h3>
            <button className="btn-danger" onClick={removeAllCompletedTodos} style={{padding: '0.4rem 0.8rem', fontSize: '0.85rem'}}>
              Clear All
            </button>
          </div>
          <ul>
            {completedTodos.map(todo => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={() => toggleTodo(todo.id)}
                onRemove={() => removeTodo(todo.id)}
                hideActions={true}
              />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default TodoList;