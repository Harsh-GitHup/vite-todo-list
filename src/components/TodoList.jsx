import { useState } from 'react';
import AddTodo from './AddTodo';
import TodoItem from './TodoItem';
import noTodosImage from '../assets/todo.png';

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  const removeTodo = (id) => {
    const newTodos = todos.filter(todo => todo.id !== id);
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
        <>
          <h2>Active Todos</h2>
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
        </>
      ) : (
        <img src={noTodosImage} alt="No active todos" className="no-todos-image" />
      )}
      {completedTodos.length > 0 && (
        <>
          <h2>Completed Todos</h2>
          <ul>
            {completedTodos.map(todo => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={() => toggleTodo(todo.id)}
                onRemove={() => removeTodo(todo.id)}
              />
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default TodoList;