import { useState } from 'react';
import PropTypes from 'prop-types';

function AddTodo({ addTodo }) {
    const [inputValue, setInputValue] = useState('');

    const handleAddTodo = () => {
        if (inputValue.trim()) {
            addTodo(inputValue);
            setInputValue('');
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleAddTodo();
        }
    };

    return (
        <div className="add-todo-container">
            <div className="add-todo">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="What needs to be done?"
                />
                <button className="btn-primary" onClick={handleAddTodo}>Add</button>
            </div>
        </div>
    );
}

AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired,
};

export default AddTodo;