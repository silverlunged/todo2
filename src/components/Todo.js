import React, { useState } from "react";


function Todo(props) {
    const [isEditing, setEditing] = useState(false);
    const [newName, setNewName] = useState('');
    function handleChange(e) {
        setNewName(e.target.value);
    }
    function handleSubmit(e) {
        preventDefault(e);
        props.editTask(props.id, newName);
        setNewName("");
        setEditing(false);
    }
    const editingTemplate = (
        <form onSubmit={handleSubmit}>
            <label htmlFor={props.id}>New name for {props.name}</label>
            <input id={props.id} type="text" value={newName} onChange={handleChange} />
            <button type="button" onClick={() => setEditing(false)}>Cancel</button>
            <button type="submit">Save</button>
        </form>
    );
    const viewTemplate = (
        <div>
            <div>
                <input
                    id={props.id}
                    type="checkbox"
                    defaultChecked={props.completed}
                    onChange={() => props.toggleTaskCompleted}
                />
                <label htmlFor={props.id}>{props.name}</label>
            </div>
            <div>
                <button type="button" onClick={() => setEditing(true)}>Edit</button>
                <button type="button" onClick={() => props.deleteTask(props.id)}>
                    Delete
                </button>

            </div>
        </div>
    )
    return (
        <li>
            {isEditing ? editingTemplate : viewTemplate}
        </li>
    )
}

export default Todo;