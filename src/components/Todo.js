import React, { useState } from "react";


function Todo(props) {
    const [isEditing, setEditing] = useState(false);
    const [newName, setNewName] = useState('');
    const editingTemplate = (
        <form>
            <label htmlFor={props.id}>New name for {props.name}</label>
            <input id={props.id} type="text" />
            <button type="button" onClick={()=>setEditing(false)}>Cancel</button>
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