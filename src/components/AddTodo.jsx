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

    return (
        <div>
            <h2>Add Todo</h2>
            <div className="add-todo">
                {/* <label htmlFor="todo-input">Enter a new todo:</label> */}
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Add a new todo..."
                />
                <button onClick={handleAddTodo}>Add Todo</button>
            </div>
        </div>
    );
}

AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired,
};

export default AddTodo;