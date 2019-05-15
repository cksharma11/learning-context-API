import React from "react";

const AddTask = props => {
  return (
    <div>
      <input type="text" value={props.defaultTask} onChange={props.updateTask} />
      <button onClick={props.addTask}>Add Task</button>
    </div>
  );
};

export default AddTask;
