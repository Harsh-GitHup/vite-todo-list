import PropTypes from 'prop-types';

function TodoItem({ todo, onToggle, onRemove, hideActions }) {
  return (
    <li className="todo-item">
      <div className="todo-content">
        {!hideActions && (
          <input
            type="checkbox"
            className="custom-checkbox"
            checked={todo.completed}
            onChange={onToggle}
          />
        )}
        <span className={`todo-text ${todo.completed ? 'completed-text' : ''}`}>
          {todo.text}
        </span>
      </div>
      {!hideActions && (
        <button className="btn-icon" onClick={onRemove} aria-label="Remove todo">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 6h18"></path>
            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
            <line x1="10" y1="11" x2="10" y2="17"></line>
            <line x1="14" y1="11" x2="14" y2="17"></line>
          </svg>
        </button>
      )}
    </li>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  onToggle: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  hideActions: PropTypes.bool,
};

TodoItem.defaultProps = {
  hideActions: false,
};

export default TodoItem;