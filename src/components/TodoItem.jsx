import PropTypes from 'prop-types';

function TodoItem({ todo, onToggle, onRemove, hideActions }) {
  return (
    <div className="todo-item">
      {!hideActions && (
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={onToggle}
        />
      )}
      <span className={todo.completed ? 'completed' : 'incomplete'}>
        {todo.text}
      </span>
      {!hideActions && <button onClick={onRemove}>Remove</button>}
    </div>
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