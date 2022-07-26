import { useState } from "react";

function Form(props) {
    const [name, setName] = useState('');
    function handleChange(e) {
        setName(e.target.value);
    }
    function handleSubmit(e) {
        e.preventDefault();
        if (name !== "") {
            props.addTask(name);
        }
        setName("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2 className="label-wrapper">
                <label htmlFor="new-todo-input" className="label_lg">
                    What's the Plan for today?
            </label>
            </h2>
            <input
                type="text"
                id="new-todo-input"
                className="input input__lg"
                name="text"
                autoComplete="off"
                value={name}
                placeholder="Add a task"
                onChange={handleChange}
            />
            <button type="submit" className="btn btn__primary btn__lg">
                Add
        </button>
        </form>
    );
}
export default Form;