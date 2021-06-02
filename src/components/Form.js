import React, { useState } from "react";

function Form(props) {
  const [name, setName] = useState('');

  function handleChange(e) {
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.addTask(name);
    setName("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} type="text" value={name} />
      <button type="submit">Add todo</button>
    </form>
  )
}

export default Form;